# Pong Game

An iconic two-player pong game powered by Python.

---

This code is for a simple two-player Pong game implemented in Python using the Turtle graphics library. The game involves two paddles and a ball that bounces between them. The players control the paddles using keyboard keys to prevent the ball from passing their side of the wall. The goal is to keep the ball from hitting the player's wall and score points by hitting the ball with the opponent's wall.

Here's an overview of the main modules:
- main.py:
  - Initializes the game's main components such as the two paddles, a ball, and a scoreboard
  - Initiates the game loop to manage the game's logic.
  - Allows players to control paddles using specific keys.
  - Detects collisions with walls and paddles, updating ball movement and scores.
- ball.py:
  - Initializes the ball's appearance, position, and movement attributes.
  - Defines methods for moving the ball, bouncing off walls, and resetting the ball's position.
- paddle.py:
  - Initializes the paddle's appearance, size, and position attributes.
  - Defines methods for moving the paddle up and down within the screen boundaries.
- scoreboard.py:
  - Initializes the scoreboard's appearance, position, and score attributes.
  - Defines methods for updating and increasing the score.

Each module (main.py, ball.py, paddle.py, scoreboard.py) contributes to a specific aspect of the game's functionality, resulting in a classic Pong game.

## Project Code
main.py

```PYTHON
from turtle import Screen, Turtle
from scoreboard import Scoreboard
from paddle import Paddle
from ball import Ball
import time

SCREEN_HEIGHT = 600
SCREEN_WIDTH = 800
ALIGNMENT = "center"
FONT = ("Baskerville Old Face", 25, "normal")
WINNER_SCORE = 3


def collide_horizontal_wall(ball, y_boundary):
    return ball.ycor() > y_boundary or ball.ycor() < -y_boundary


def collide_paddle(ball, paddle_left, paddle_right):
    return (
        ball.distance(paddle_left) < 50
        and ball.xcor() <= (paddle_left.xcor() + 20)
        or ball.distance(paddle_right) < 50
        and ball.xcor() >= (paddle_right.xcor() - 20)
    )


# setup screen
screen = Screen()
screen.setup(width=SCREEN_WIDTH, height=SCREEN_HEIGHT)
screen.title("Ping Ping Pong")
screen.colormode(255)
screen.bgcolor("black")
screen.tracer(0)

# setup turtle for drawing separation line
turtle = Turtle()
turtle.speed(0)
turtle.hideturtle()
turtle.pensize(6)
turtle.pencolor("white")
turtle.penup()
start_y = SCREEN_HEIGHT // 2
turtle.goto(x=0, y=start_y)

# draw separation line
while start_y > -(SCREEN_HEIGHT // 2):
    if turtle.isdown():
        turtle.penup()
    else:
        turtle.pendown()

    start_y -= 20
    turtle.goto(0, start_y)

# setup scoreboard
y_cor = (SCREEN_HEIGHT // 2) - 70
scoreboard_left = Scoreboard(x=-50, y=y_cor)
scoreboard_right = Scoreboard(x=50, y=y_cor)

# setup paddle
x_cor = (SCREEN_WIDTH // 2) - 20
paddle_left = Paddle(x_cor=-x_cor)
paddle_right = Paddle(x_cor=x_cor - 10)

# setup ball
ball = Ball()

screen.listen()


def start_game():
    is_game_on = True
    y_boundary = (SCREEN_HEIGHT // 2) - 20
    x_boundary = (SCREEN_WIDTH // 2) - 20

    while is_game_on:
        screen.update()
        time.sleep(ball.move_speed)

        screen.onkey(fun=paddle_left.move_up, key="a")
        screen.onkey(fun=paddle_left.move_down, key="s")
        screen.onkey(fun=paddle_right.move_up, key="k")
        screen.onkey(fun=paddle_right.move_down, key="l")

        if collide_horizontal_wall(ball, y_boundary):
            ball.bounce_y()

        if collide_paddle(ball, paddle_left, paddle_right):
            ball.bounce_x()

        ball.move()

        # detect collision with right wall
        if ball.xcor() > x_boundary:
            ball.reset_ball()
            screen.update()
            time.sleep(1)
            scoreboard_left.increase_score()

        # detect collision with left wall
        elif ball.xcor() < -(x_boundary + 10):
            ball.reset_ball()
            screen.update()
            time.sleep(1)
            scoreboard_right.increase_score()

        if scoreboard_left.score >= WINNER_SCORE:
            is_game_on = False
            turtle.penup()
            turtle.goto(x=0, y=100)
            turtle.pencolor("blue")
            turtle.write(
                f"Player Left got {scoreboard_left.score} points first  ! The winner is Player Left!  ",
                align=ALIGNMENT,
                font=FONT,
            )
        elif scoreboard_right.score >= WINNER_SCORE:
            is_game_on = False
            turtle.penup()
            turtle.goto(x=0, y=100)
            turtle.pencolor("blue")
            turtle.write(
                f"Player Right got {scoreboard_right.score} points first  ! The winner is Player Right!  ",
                align=ALIGNMENT,
                font=FONT,
            )


screen.onkey(fun=start_game, key="f")


screen.exitonclick()
```

ball.py

```PYTHON
from turtle import Turtle
import random

class Ball(Turtle):
    def __init__(self):
        super().__init__()
        self.penup()
        self.shape("circle")
        self.pencolor("orange")
        self.fillcolor("orange")
        self.x_move = random.choice([1,-1])
        self.y_move = random.choice([1,-1])
        self.speed(0)
        self.move_speed = 0.005

    def move(self):
        x = self.xcor() + self.x_move
        y = self.ycor() + self.y_move

        self.goto(x = x,y = y)

    def bounce_y(self):
        '''trigger when the ball hit the top wall or bottom wall'''
        self.y_move *= -1

    def bounce_x(self):
        '''trigger when the ball hit the left wall or right wall'''
        self.x_move *= -1
        # increase the moving speed of ball
        self.move_speed *= 0.6

    def reset_ball(self):
        self.goto(x=0, y=0)
        self.move_speed = 0.005
        self.x_move *= -1
```

paddle.py

```PYTHON
from turtle import Turtle

class Paddle(Turtle):
    def __init__(self, x_cor) -> None:
        super().__init__()
        self.x = x_cor
        self.penup()
        self.shape("square")
        self.shapesize(stretch_wid=5, stretch_len = 1 )
        self.pencolor("white")
        self.fillcolor("white")
        self.goto(x = self.x, y = 0)

    def move_up(self):
        if self.ycor() < 240:
            self.goto(x = self.x, y = self.ycor() + 20)

    def move_down(self):
        if self.ycor() > -240:
            self.goto(x = self.x, y = self.ycor() - 20)
```

scoreboard.py

```PYTHON
from turtle import Turtle
ALIGNMENT = 'center'
FONT = ('Baskerville Old Face', 50, 'normal')

class Scoreboard(Turtle):
    def __init__(self, x, y):
        super().__init__()
        self.hideturtle()
        self.penup()
        self.goto(x = x, y = y)
        self.pencolor("blue")
        self.score = 0
        self.update_score()

    def update_score(self):
        self.clear()
        self.write(str(self.score), align= ALIGNMENT,font= FONT)

    def increase_score(self):
        self.score += 1
        self.update_score()

```