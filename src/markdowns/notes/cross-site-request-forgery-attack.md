# Cross Site Request Forgery (CSRF) web attack and how to prevent it using Flask-WTF

Cross-Site Request Forgery (CSRF) is an attack against a web application in which the attacker attempts to trick an authenticated user into performing a malicious action. Most CSRF attacks target web applications that use cookie-based auth since web browsers include all of the cookies associated with a particular domain with each request. So when a malicious request is made from the same browser, the attacker can easily make use of the stored cookies.

Here's how CSRF works: 
1. **User Authentication**: The victim user logs in to a web application, such as a social media site or an online banking platform. The user receives an authentication token, usually stored as a browser cookie, which identifies them as a legitimate user.
2. **Malicious Request**: The attacker creates a malicious website or disguises a link on a legitimate site. This website or link contains a request to perform an action on the target web application, such as changing the user's password or making a financial transaction.
3. **User Interaction**: The victim user visits the malicious website or clicks on the disguised link, often unknowingly. The user's browser sends the authenticated session cookie along with the malicious request.
4. **Forgery**: Since the user's browser automatically includes the authentication token (cookie) with the request, the web application interprets the request as legitimate, assuming it comes from the authenticated user.
5. **Unauthorized Action**: The attacker's request is executed on the target application without the user's consent. This could lead to actions like unauthorized money transfers, changes to account settings, or posting on behalf of the user without their knowledge.

How Flask-WTF extension tackles CSRF attacks:
1. **Configure a secret key in a Flask app**: The secret key is part of the mechanism the Flask-WTF uses to protect all forms against CSRF attacks.

    ```PYTHON
        # app.py
        from flask_wtf.csrf import CSRFProtect
        app = Flask(__name__)
        app.config.update(
            DEBUG=True,
            SECRET_KEY="secret_key",
        )

        csrf = CSRFProtect()
        csrf.init_app(app)
    ```

2. **CSRF Token Generation**: Flask-WTF generates a random CSRF token for each form that you create using the extension. This token is unique to the user's session. To use Flask-WTF, we must set the *SECRET_KEY*
3. **Token Insertion in Forms**: When you render a form in your HTML template using Flask-WTF, it inserts the CSRF token as a hidden field in the form. For example, in your template, you might have something like:

    ```HTML
    <!-- templates/account.html -->
    <form action="/accounts" method="POST" autocomplete="off">
        <p>Transfer Money</p>
        <input type="text" name="account" placeholder="accountid">
        <input type="number" name="amount" placeholder="amount">
        <input type="submit" value="send">

        <!-- insert token in forms -->
        <input type="hidden" name="csrf_token" value="{{ csrf_token() }}">
    </form>
    ```

4. **Token Validation on Submission**: When the user submits the form, Flask-WTF automatically validates the CSRF token included in the form data. It checks whether the token matches the one associated with the user's session. If the tokens do not match, the submission is rejected.


# Reference
[an example of a Flask app that's vulnerable to CSRF attacks and how to implement CSRF protection](https://testdriven.io/blog/csrf-flask/)
[Miguel Grinberg - Flask Web development](https://www.oreilly.com/library/view/flask-web-development/9781491991725/)