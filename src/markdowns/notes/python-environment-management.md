# Environment Management in Python

An environment is a copy of the Python interpreter into which you can install packages privately, without affecting the global Python interpreter installed in your system. 

Creating an environment for each project ensures that applications have access only to packages that they use, while the global interpreter remains neat and clean and serves only as a source from which more virtual environments can be created.

There are many enviroment management tool in Python:

1. venv is a module provided with Python 3.3 and later versions for creating virtual environments.
  - *python3 -m venv virtual-environment-name*

	  The -m venv option runs the venv package from the standard library as a standalone script, passing the desired name as an argument  

  - use a virtual environment
      - *source venv/bin/activate* 

        When a virtual environment is activated, the location of its Python interpreter is added to the PATH environment variable in our current command session, which determines where to look for executable files.  

	  - *venv/bin/python*

	    start a Python console for the venv without activating the virtual environment  
    
- *deactivate*

	To restore the PATH environment variable for your terminal session and the command prompt to their original states.  

2. The conda env that I am using has the same role as venv:
  - *conda create --name virtual-environment-name*  

    Create a new Conda environment
    
  - *conda activate myenv*

    Activate the environment
  
    


# Reference
[Miguel Grinberg: Flask Web Development pg 2-5](https://www.oreilly.com/library/view/flask-web-development/9781491991725/)