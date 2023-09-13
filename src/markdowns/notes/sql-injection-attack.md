# SQL injection attack and how to prevent it using parameterized query

SQL injection is a type of security vulnerability that occurs when an attacker can manipulate an SQL query by injecting malicious SQL code into input fields or parameters, potentially allowing them to view, modify, or delete data in the database.

---

## How to detect SQL injection vulnerabilities 
We can detect SQL injection manually using a systematic set of tests against every entry point in the application. To do this, we would typically submit:

- The single quote character (*' *) and look for errors or other anomalies. For example, if a user input field is vulnerable, entering (*' *)  might lead to a database error because the single quote can break the query structure.

- Inputs that evaluate to the base (original) value of the entry point, and to a manipulated value that contains SQL-specific syntax, and look for systematic differences in the application responses. For example, *gift* is base value of the entry point, *gift'* might lead to internal server error but *gift'--* does not lead to any error since *--* represents single-line comment in SQL.

- Boolean conditions such as *OR 1=1* and *OR 1=2*, and look for differences in the application's responses.

## Example of SQL injection attack:

### Original code

The *vulnerable_is_admin()* function takes a *username* parameter and performs a SQL query on the database to check if the user with that username has administrative privileges (*admin* status).

```PYTHON
def vulnerable_is_admin(username):
    with connection.cursor() as cursor:
        cursor.execute("SELECT admin FROM users WHERE username = '%s'" % username)
        result = cursor.fetchone()

    if not result:
        return False

    (admin,) = result
    return admin
```

### SQL attack
As the *vulnerable_is_admin()* function allows the value passed from the client to be executed directly to the database through string interpolation, without performing any sort of check or validation. An intruder can:

1. exploit the system and gain admin permissions by using a carefully crafted string such as 
  
  *';SELECT true; *
2. modify the database and elevate privilege of non-admin user using 

  *';UPDATE users SET admin = 'true' WHERE username='haki'; SELECT 'modified'; *

  ```BASH
  ------- database before SQL injection-------
  postgres=# SELECT * FROM users;
   username | admin
  ----------+-------
   ran      | t
   haki     | f
  (2 rows)
  
  ------- database after SQL injection-------
  postgres=# SELECT * FROM users;
   username | admin
  ----------+-------
   ran      | t
   haki     | t
  (2 rows)
  ```

### To prevent intruders from injecting raw SQL in the place of a string argument
1. We can escape quotation marks by adding this line 

  *username = username.replace(" ' ", " '' ")* 

  Escaping a single quotation mark is where you say to the database, “Hey, this character here is part of my string, don’t treat it as a special character like you normally would”. [(see more ways to escape single quotes in SQL)](https://www.databasestar.com/sql-escape-single-quote/#:~:text=The%20simplest%20method%20to%20escape,Server%2C%20MySQL%2C%20and%20PostgreSQL.)
	  
    ```SQL
    -- the resulted SQL will be this --
    SELECT admin FROM users WHERE username = ''';SELECT true; --'

    -- instead of this --
    SELECT admin FROM users WHERE username = '';SELECT true; --'
    ```

2. Modern database adapters, come with built-in tools for preventing Python SQL injection by using **parameterized queries**. Parameterized query is a technique that aims to separate the SQL query from the user input values.

    ```PYTHON
    def safe_is_admin(username):
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT admin
                FROM users
                WHERE username = %(username)s
            """,
                {"username": username}
            )
            result = cursor.fetchone()

        if result is None:
            return False

        (admin,) = result
        return admin
    ```

  The connection treated the value of *username* as a string and escaped any characters that might terminate the string and introduce Python SQL injection.

---

## To include user input in SQL query:

- Vulnerable way: Each of these statements passes *username* from the client directly to the database, without performing any sort of check or validation.

    ```PYTHON
    # BAD EXAMPLES. DON'T DO THIS!
    cursor.execute("SELECT admin FROM users WHERE username = '" + username + '");
    cursor.execute("SELECT admin FROM users WHERE username = '%s' % username);
    cursor.execute("SELECT admin FROM users WHERE username = '{}'".format(username));
    cursor.execute(f"SELECT admin FROM users WHERE username = '{username}'");
    ```

- Safe way: In these statements, *username* is passed as a named parameter. Now, the database will use the specified type and value of *username* when executing the query, offering protection from Python SQL injection.
	
    ```PYTHON
    # SAFE EXAMPLES. DO THIS!
    cursor.execute("SELECT admin FROM users WHERE username = %s'", (username, ));
    cursor.execute("SELECT admin FROM users WHERE username = %(username)s", {'username': username});
    ```

# Reference
[Preventing SQL Injection Attacks With Python](https://realpython.com/prevent-python-sql-injection/#exploiting-query-parameters-with-python-sql-injection)

[portswigger - sql injection](https://portswigger.net/web-security/sql-injection#retrieving-hidden-data)