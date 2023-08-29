# Turtle Crossing Game

A Python-powered simplified version of classic Frogger game.

---

This code is for a simplified version of the classic Frogger game using Python's Turtle graphics library. In the game, the player controls a turtle character that needs to cross a road full of moving cars to reach the other side. The goal is to cross the road successfully without getting hit by any cars. The game includes increasing levels of difficulty (which is increasing the speed of the moving car) as the player progresses.

Here's an overview of the main components and functionality of the code:
- main.py:
  - Initializes the game's main components such as the player, car manager and scoreboard.
  - Defines a function to increase the game's difficulty when the player crosses successfully.
  - Sets up keyboard control for the player's movement.
  - Runs the game loop, which includes moving cars, adding new cars, checking for collisions, and updating the game state based on the player's actions and scores.
  - Ends the game when the player wins or loses.

- car_manager.py:
  - Initializes attributes such as car colours, starting move distance, and move increment.
  - Defines methods to add new cars, move existing cars, and increase the car's move distance and frequency of adding cars.
  - Checks for collisions between cars and the player.

- player.py:
  - Initializes the turtle's appearance, starting position, and movement attributes.
  - Defines methods for the player to move up, check if they've reached the finish line, and restart the player's position.

- scoreboard.py:
  - Initializes the scoreboard's appearance, level, and position attributes.
  - Defines methods to update the level, increase the level, show game over message, and show victory message.

Each module (main.py, car_manager.py, player.py, scoreboard.py) contributes to a specific aspect of the game's functionality, resulting in a simplified version of the classic Frogger game.

## Project Code

main.py

```PYTHON
import time
from turtle import Screen
from player import Player
from car_manager import CarManager
from scoreboard import Scoreboard

def increase_difficulty(scoreboard, car_manager, player):
        scoreboard.increase_level()
        car_manager.increase_move_distance()
        car_manager.increase_frequency_adding_car()
        player.restart()

# setup screen
screen = Screen()
screen.setup(width=600, height=600)
screen.tracer(0)

# setup player
player = Player()

# setup scoreboard
scoreboard = Scoreboard()

# setup car
car_manager = CarManager()

screen.listen()
screen.onkey(fun = player.go_up, key = "Up")

game_is_on = True
while game_is_on:
    time.sleep(0.1)
    screen.update()

    car_manager.move()
    car_manager.add_car(x_start=300,x_end=300)

    if player.is_reach():
          increase_difficulty(scoreboard, car_manager, player)

    if car_manager.is_collision(player):
          scoreboard.game_over()
          game_is_on = False
    
    if scoreboard.level == 6:
          scoreboard.congratulation()
          game_is_on = False

screen.exitonclick()
```

car_manager.py

```PYTHON
from turtle import Turtle
import random

COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]
STARTING_MOVE_DISTANCE = 5
MOVE_INCREMENT = 10

class CarManager:
    def __init__(self) -> None:
        self.frequency_adding_car = 6
        self.cars = []
        self.move_distance = STARTING_MOVE_DISTANCE
        for _ in range(15):
            self.add_car(-300,300)

    def add_car(self, x_start, x_end):
        '''get the range [x_start,x_end] of x_coordinate to place the new car'''
        
        if random.randint(1,self.frequency_adding_car) == 1:
            color = random.choice(COLORS)
            random_y = random.randint(-250, 250)
            random_x = random.randint(x_start, x_end)

            car = Turtle(shape= "square")
            car.penup()
            car.setheading(180)
            car.goto(x = random_x , y = random_y)
            car.shapesize(stretch_wid=1, stretch_len=2)
            car.color(color, color)

            self.cars.append(car)
        
    def move(self):
        for car in self.cars:
            car.forward(self.move_distance)

    def increase_move_distance(self):
        self.move_distance += MOVE_INCREMENT

    def increase_frequency_adding_car(self):
        self.frequency_adding_car -= 1

    def is_collision(self, player):
        for car in self.cars:
            if car.distance(player) < 20:
                return True
        return False

```

player.py

```PYTHON
from turtle import Turtle 

STARTING_POSITION = (0, -280)
MOVE_DISTANCE = 10
FINISH_LINE_Y = 280


class Player(Turtle):
    def __init__(self):
        super().__init__()
        self.penup()
        self.shape("turtle")
        self.setheading(90)
        self.restart()


    def go_up(self):
        self.forward(MOVE_DISTANCE)

    def is_reach(self):
        if self.ycor() > FINISH_LINE_Y :
            return True
        return False
    
    def restart(self):
        self.goto(STARTING_POSITION)
```

scoreboard.py

```PYTHON
from turtle import Turtle

FONT = ("Courier", 24, "normal")

class Scoreboard(Turtle):
    def __init__(self):
        super().__init__()
        self.penup()
        self.hideturtle()
        self.goto(x = -275, y = 265)
        self.level = 1
        self.update_level()

    def update_level(self):
        self.clear()
        self.write(f"Level {self.level}", font= FONT)

    def increase_level(self):
        self.level += 1
        self.update_level()

    def game_over(self):
        self.goto(x = 0, y = 0)
        self.write("GAME OVER!", font= FONT, align= "center")

    def congratulation(self):
        self.goto(x = 0, y = 0)
        self.write("YOU WIN!", font= FONT, align= "center")
```