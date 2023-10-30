# React Sample App

This react project can be used to demonstrate goast's ability to fix crashes.

## How to use this repository

1) Fork this repository if you haven't already.
2) Go to https://app.goast.ai and click the button to add a repository. Make sure to install the goast Github App in the organization where this repository exists (Probably just on your user).
3) Copy this stack trace to put into goast (Or you can click the `Python: IndexError` button in goast in the `Sample stack traces` section)

```
Traceback (most recent call last):
  File "/workspace/goast-sample-app/python/venv/lib/python3.10/site-packages/flask/app.py", line 1478, in __call__
    return self.wsgi_app(environ, start_response)
  File "/workspace/goast-sample-app/python/venv/lib/python3.10/site-packages/flask/app.py", line 1458, in wsgi_app
    response = self.handle_exception(e)
  File "/workspace/goast-sample-app/python/venv/lib/python3.10/site-packages/flask/app.py", line 1455, in wsgi_app
    response = self.full_dispatch_request()
  File "/workspace/goast-sample-app/python/venv/lib/python3.10/site-packages/flask/app.py", line 869, in full_dispatch_request
    rv = self.handle_user_exception(e)
  File "/workspace/goast-sample-app/python/venv/lib/python3.10/site-packages/flask/app.py", line 867, in full_dispatch_request
    rv = self.dispatch_request()
  File "/workspace/goast-sample-app/python/venv/lib/python3.10/site-packages/flask/app.py", line 852, in dispatch_request
    return self.ensure_sync(self.view_functions[rule.endpoint])(**view_args)
  File "/workspace/goast-sample-app/python/jokes_server.py", line 17, in index
    return render_template('index.html', joke=jokes[joke_index])
IndexError: list index out of range
```

4) Click `Generate Fix`

## About the stack trace

This example is a backend python error. In this case, `joke_index` could potentially be equal to `len(jokes)`, which is out of bounds for the `jokes` list, since indexing starts at 0. The correct range should be between 0 and `len(jokes) - 1`.

## Run this sample

If you want to see the crash in action, you can run this sample yourself.

1. Setup a Virtual Environment (Optional but Recommended):

   Creating a virtual environment for your project will ensure that the dependencies of your project won't interfere with other Python projects on your system.

   a. Install virtualenv (if you haven't):
   
   `pip install virtualenv`

   b. Navigate to your project directory and create a virtual environment:

   `virtualenv venv`

   c. Activate the virtual environment:

      * On macOS and Linux
    
       `source venv/bin/activate`
    
      * On Windows (using cmd.exe)
    
       `venv\Scripts\activate.bat`

      * On Windows (using PowerShell)
    
       `.\venv\Scripts\Activate.ps1`

2. Install Dependencies from requirements.txt:
    
   With the virtual environment activated (or without it if you're not using one), you can now install the dependencies using:

   `pip install -r requirements.txt`

3. Run the Flask Server:

   `python jokes_server.py`
