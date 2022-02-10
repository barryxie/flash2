### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
  RESTful routing is using multiple HTTP verbs on the same route. Inside this app route, it can execute different code based on the HTTP method. 

- What is a resource?
  the things after base url
  An object with a type, associated data, relationships to other resources

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
   There is no reason to use render, because building a JSON API passes the information from the route to a JSON dictionary in postgrSQL via POST.

- What does idempotent mean? Which HTTP verbs are idempotent?
  Idempotent is a repeatable operation, which get a same result even done multiple times
  GET, PUT/PATCH/, DELETE

- What is the difference between PUT and PATCH?
  PUT is updating entrie resource
  PATCH is unpdating part of resource

- What is one way encryption?
  One way encryption is when only the user who created the account has access to the password itself non-reversibly. That way a company doesn't store the exact password in its database.

- What is the purpose of a `salt` when hashing a password?
  Adding salts into a hash function makes it harder for a hacker to reverse engineer or guess a password - which makes user data more secure. 

- What is the purpose of the Bcrypt module?
  bcrpyt is a password hashing function that is implemented broadly across many languages and used by default in some open-source operating systems and OS distributions. 

- What is the difference between authorization and authentication?
  Authentication is the process of verifying who someone's identity. 
  Authorization is the process of giving permissions to a person based on their identity. 
