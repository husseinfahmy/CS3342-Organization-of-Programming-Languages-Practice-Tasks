{
     "questiontemplate": {
        "question": "What is the answer?",
        "answer": "That which was asked for",
        "note": "optional note",
        "source": "SLSW# or ICD# where # is chapter number"
     },
  "description": "questions from which to construct the Winter 2017 final exam in CS3342b",
  "questions": [
     {
        "question": "Adding a feature to a programming language to make it easier to do something that was already doable is called adding ANSWER?",
        "answer": "syntactic sugar",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "Matz, the creator of Ruby, thinks that it is less important to optimize the execution (efficiency) of a programming language and more important to optimize the efficiency of ANSWER",
        "answer": "the programmers",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "A programming language is called ANSWER if it is executed by an interpreter rather than by first being compiled with a compiler",
        "answer": "interpreted",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "If the types of a programming language are bound at execution time rather than compile time, then the types are called ANSWER",
        "answer": "dynamically typed",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In describing the properties of an object oriented language, encapsulation means ANSWER",
        "answer": ["data and behavior are packaged together", "there is a mechanism for restricting access to an object's components"],
        "note": "the first is the textbook answer, but there are actually two usages of the term encapsulation in the object-oriented programming community https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)",
        "source": "SLSW2"
     },
     {
        "question": "In discussing object oriented languages, objects are organized into a class tree to support the property of ANSWER",
        "answer": "inheritance",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In discussing object oriented languages, being able to handle objects of related types is called ANSWER",
        "answer": "polymorphism",
        "note": "polymorphism has a different usage in the object oriented programming community than in the functional programming community",
        "source": "SLSW2"
     },
     {
        "question": "The application that caused a significant increase in the popularity of Ruby was a web framework called ANSWER",
        "answer": "Rails (or Ruby on Rails)",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "The concurrency approach used in Ruby is ANSWER",
        "answer": "threads",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "The command name for the Ruby interpreter is",
        "answer": "irb",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In Ruby, true.class returns ANSWER",
        "answer": "TrueClass",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "Ruby supports two common ways that boolean expressions are handled in programming languages.  In one approach both subexpressions of a boolean operator are evaluated before the boolean operator is evaluated.  In the other approach, called ANSWER, the first subexpression in a boolean expression is evaluated and if that is enough to know the result of the boolean expression, then the second subexpression is not evaluated.",
        "answer": "short-circuit evaluation",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In Ruby, normally, when you try to add a String to a Fixnumm, you get an error message saying that a String can't be coerced to a Fixnum.  This is because Ruby is ANSWER typed.",
        "answer": "strongly",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "One way of checking types is to see what constructor was used to create an object that is a parameter.  Another way of checking types is to wait until a method is sent to an object and see if it supports the method.  This second way is called ANSWER",
        "answer": "duck typing",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "A major claim in object oriented design philosophy is that you should code to ANSWER rather than code to implementation",
        "answer": "interface",
        "note": "this is discussed in more detail elsewhere http://www.artima.com/lejava/articles/designprinciplesP.html",
        "source": "SLSW2"
     },
     {
        "question": "The & notation in the line of Ruby def george(&sam) is used to indicate that sam is ANSWER",
        "answer": "a code block",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "The : notation in the Ruby expressions :hi is used to indicate that hi is ANSWER",
        "answer": "a symbol",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "With respect to the value returned by the Ruby expression 'hi'.object_id == 'hi'.object_id, you can say it ANSWER",
        "answer": "could be either true or false",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "With respect to the value returned by the Ruby expression :hi.object_id == :hi.object_id, you can say it ANSWER",
        "answer": "will always be true",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "To execute a code block in Ruby that is passed to a method but doesn't appear on its parameter list, you use the keyword ANSWER",
        "answer": "yield",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "To execute a code block in Ruby that is passed to a method on its parameter list, you send that parameter the method ANSWER",
        "answer": "call",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "A code block is some lines of code surrounded by either curly braces or ANSWER",
        "answer": "do end",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In Ruby, the expression Fixnum.class returns ANSWER",
        "answer": "Class",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "The root of the inheritance hierarchy in Ruby is the class ANSWER",
        "answer": "Object",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In Ruby, the name of the method in the class Me that is automatically invoked when a new object of type Me is created with Me.new is ANSWER",
        "answer": "initialize",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In Ruby, the @ is used to indicate that the variable @me is ANSWER",
        "answer": "an instance variable",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In Ruby, the @@ is used to indicate that the variable @@me is ANSWER",
        "answer": "a class variable",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In Ruby, by convention, the ? in the method me? is used to indicate that me is ANSWER",
        "answer": "boolean",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In Ruby, the mixin is used to solve the object-oriented programming problem of ANSWER",
        "answer": "multiple inheritance",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "The feature of programs being able to `write programs' (creating application specific language features) is called ANSWER",
        "answer": "metaprogramming",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In Ruby, if you declare a class with a class name that is already in use and put in it the definition of a new method, you have changed the functionality of the existing class (even if it is a predefined class like Fixnum).  The property of Ruby that allows this is ANSWER",
        "answer": "open classes",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "When you send a message to a Ruby object, Ruby first looks at the methods that object supports, and then starts working the inheritance chain.  If it still can't find the appropriate method, the message and its parameters get passed as a message to the object looking for a method called ANSWER",
        "answer": "method_missing",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In the Ruby community, the acronym DSL is an abbreviation for ANSWER",
        "answer": "domain specific language",
        "note": "optional note",
        "source": "SLSW2"
     },
     {
        "question": "In Ruby, if a line starts with a method name, that method is being sent to the object named ANSWER",
        "answer": "self",
        "note": "this crops up in understanding various example pieces of code in the chapter",
        "source": "SLSW2"
     },
     {
        "question": "When you define a method in a class, normally it is meant to be invoked on an object of that class (an instance method).  Sometimes it is meant to be invoked on the class name itself (a class method), like Date.parse('3rd Feb 2001').  In Ruby, to define a class method, we put ANSWER at the beginning of the method name in its definition.",
        "answer": "self.",
        "note": "this crops up in understanding various example pieces of code in the chapter",
        "source": "SLSW2"
     },
     {
        "question": "Instead of the +  symbol, Haskell uses the symbol ANSWER for a string concatenation operator.",
        "answer": "++",
        "note": "this seems trivial, but think what it says about Haskell that it doesn't just overload + to do concatenation",
        "source": "SLSW8"
     },
     {
        "question": "The type of a string in Haskell, by default, is written ANSWER",
        "answer": "[Char]",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, you use the keyword ANSWER to collect related code into a similar scope",
        "answer": "module",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, if I define a function double = x + x, its type signature would be ANSWER",
        "answer": "(Num a) => a -> a",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, instead of writing something like if x == 0 then 1 else fact ( x - 1 ) * x, you can write a series of lines starting with factorial 0 = 1.  This second style is called ANSWER."
        "answer": "pattern matching",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, instead of writing something like if x == 0 then 1 else fact ( x - 1 ) * x, you can write a series of lines starting with | x > 1 = x * factorial ( x - a).  This second style is called ANSWER."
        "answer": "using guards",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, instead of writing something like second x = head( tail(  x ) ), you can write this without introducing the parameter x by using function composition.  Doing that, you would write ANSWER"
        "answer": "second = head . tail",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, if I write (h:t) = [3, 5, 7], ANSWER is the value of h?"
        "answer": "3",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, if I write (h:t) = [3, 5, 7], ANSWER is the value of t"
        "answer": "[5, 7]",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, ANSWER is the output of zip [17..20] [10,8..4]"
        "answer": "[(17,10),(18,8),(19,6),(20,4)]",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, ANSWER is the output of zip [20..17] [10,8..4]"
        "answer": "[]",
        "note": "default increment is 1 and zip only goes as far as shortest argument list.",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, defining lists using a notation like [x * 2 | x <- [3, 4, 5]] is called using ANSWER"
        "answer": "list comprehensions",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, [x * 2 | x <- [3, 4, 5]]  evaluates to ANSWER"
        "answer": "[6, 8, 10]",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, defining lists using a notation like [x * 2 | x <- [3, 4, 5] is called using ANSWER"
        "answer": "list comprehensions",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, how would you write an anonymous function so that map ANSWER [1, 2, 3] produces [-4, -5, -6]"
        "answer": "(\\x -> - (x + 3))",
        "note": "note above should contain just a single backslash, which in Haskell we would read as lambda",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, if we want to define a local named function inside a function definition, we use the keyword ANSWER"
        "answer": "where",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, the type signature of the function sum x y = x + y is ANSWER"
        "answer": "(Num a) => a -> a -> a",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, given the definition sum x y = x + y, ANSWER is the value of that is produced by the expresion (sum 3)"
        "answer": "(\\x -> 3 + x)",
        "note": "again, that should be just one back slash in the answer, the actual parameter name doesn't matter to the answer as long as it is used consistently",
        "source": "SLSW8"
     },
     {
        "question": "The way Haskell handles functions with more than one parameter is called ANSWER"
        "answer": "currying",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In most languages, a function definition like f a b = a : (f (a + b) b) would result in an infinite recursion.  However, in Haskell we can partially evaluate functions like this because Haskell is based on ANSWER"
        "answer": "lazy evaluation",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "Although Haskell is a statically typed language, we usually don't need to write type declarations because Haskell uses ANSWER to handle the matter."
        "answer": "type inference",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell, we can declare the type of a parameter to a function to be something specific like Num.  However, we can also declare the type of a parameter to be something that could include many types like ListLike that supports the functions head and tail.  We do this with a definition of ListLike that begins with the keyword ANSWER."
        "answer": "class",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "One of the three most significant parts of a monad is called ANSWER, which wraps up a function and puts it in the container",
        "answer": "return",
        "note": "optional note",
        "source": "SLSW8"
     },

     {
        "question": "One of the three most significant parts of a Haskell monad is called ANSWER, which unwraps up a function",
        "answer": [">>=", "a bind function"],
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "In Haskell's do notation for working with monads, assignment uses the ANSWER operator",
        "answer": "<-",
        "note": "optional note",
        "source": "SLSW8"
     },
     {
        "question": "Since Haskell doesn't have traditional error handling, by convention people use the ANSWER monad to distinguish a valid return from an error return",
        "answer": "Maybe",
        "note": "this is similar to NaN's usage in IEEE standard floating point arithmetic",
        "source": "SLSW8"
     },
     {
        "question": "When viewing programming languages as natural languages, the word ANSWER is used instead of `words'",
        "answer": "tokens",
        "note": "optional note",
        "source": "ICD1"
     },
     {
        "question": "The routine in a compiler that takes as input a sequence of characters outputs these characters grouped into meaningful units is called ANSWER",
        "answer": ["a lexical analyzer", "a scanner", "a lexer"],
        "note": "optional note",
        "source": "ICD1"
     },
     {
        "question": "The specifications for how to group characters into meaningful units are traditionally written as ANSWER",
        "answer": "regular expressions",
        "note": "optional note",
        "source": "ICD1"
     },
     {
        "question": "The specifications of how to group characters into meaningful basic units of a programming language are generlly implemented in code that has the abstract form of ANSWER",
        "answer": ["a finite automata", "a finite state machine"],
        "note": "optional note",
        "source": "ICD1"
     },
     {
        "question": "When viewed abstractly, a language is defined as a set of ANSWER",
        "answer": "strings",
        "note": "optional note",
        "source": "ICD1"
     },
     {
        "question": "The Greek letter epsilon, when talking about languages, is used to represent ANSWER",
        "answer": "the empty string",
        "note": "optional note",
        "source": "ICD1"
     },
     {
        "question": "In automatically generating the code that reads characters and outputs the part of a programming language that is analogous to its words, we start with a specification and then traditionally convert it into code in two stages.  In the first stage, we produce ANSWER ",
        "answer": ["a nondeterministic finite automata", "a nondeterministic finite state machine"],
        "note": "optional note",
        "source": "ICD1"
     },
     {
        "question": "In automatically generating the code that reads characters and outputs the part of a programming language that is analogous to its words, we start with a specification and then traditionally convert it into code in two stages.  The main problem that can arise in moving from the first stage to the second stage is ANSWER ",
        "answer": "an exponential explosion in the number of states needed",
        "note": "optional note",
        "source": "ICD1"
     },
     {
        "question": "Three concepts related to concurrency were discussed with regards to the language Io.  ANSWER was presented as a way to manage two execution streams that pass control back and forth between themselves.",
        "answer": "coroutines",
        "note": "optional note",
        "source": "SLSW3"
     },
     {
        "question": "Three concepts related to concurrency were discussed with regards to the language Io.  ANSWER was presented as a general mechanism for sending a message to an object that would cause that object to respond to the message as a separate process running asynchronously.",
        "answer": "Actors",
        "note": "optional note",
        "source": "SLSW3"
     },
     {
        "question": "Three concepts related to concurrency were discussed with regards to the language Io.  ANSWER was presented as a way to request that something be computed and then be able to continue computing until the result was needed.  If the result was available then things would proceed as expected.  If the result was not available, then a wait would be initiated until the result became available.",
        "answer": "Futures",
        "note": "optional note",
        "source": "SLSW3"
     },
     {
        "question": "Io is known for taking a ANSWER -based approach to object oriented programming",
        "answer": "prototype",
        "note": "optional note",
        "source": "SLSW3"
     },
     {
        "question": "In Io, the basic method for creating a new object is ANSWER",
        "answer": "clone",
        "note": "optional note",
        "source": "SLSW3"
     },
     {
        "question": "In Io, the type of an object is generally the nearest ancestor that ANSWER",
        "answer": ["has a name that starts with a capital letter", 
                   "has a slot for the method type"],
        "note": "optional note",
        "source": "SLSW3"
     },
     {
        "question": "In Io, we create a singleton by redefining the method ANSWER",
        "answer": "clone",
        "note": "optional note",
        "source": "SLSW3"
     },
     {
        "question": "In Ruby, the evaluation of arguments to a message are handled by the object sending the message.  In Haskell, the runtime environment decides when and how much to evaluate an argument to a function.  In Io, the evaluation of the arguments to a message is made by ANSWER",
        "answer": "the reciever of the message",
        "note": "optional note",
        "source": "SLSW3"
     },
     {
        "question": "In Io, a message has three aspects that can be interrogated by the call method.  They are: the sender, the reciever, and ANSWER",
        "answer": "the argument list",
        "note": "optional note",
        "source": "SLSW3"
     },
     {
        "question": "Io allows programmers to play with its syntax, doing things like introducing a colon operator and redefining how curly braces are processed.  This makes it easy to use Io to create ANSWER",
        "answer": "Domain Specific Languages",
        "note": "optional note",
        "source": "SLSW3"
     },
     {
        "question": "As one would expect in an object oriented language, when a message is sent to an object, the first thing the system does is to look for a corresponding method in that object.  However, Io lets you change what happens next by redefining the method named ANSWER",
        "answer": "forward",
        "note": "optional note",
        "source": "SLSW3"
     },
     {
        "question": "The central idea of context-free grammars is to define a language by productions.  These productions say that a nonterminal symbol can be replaced by ANSWER",
        "answer": ["a sequence of terminals and nonterminals", "a sequence of symbols"]
        "note": "first answer is clearer, but second answer is consistent with book usage of the term symbol",
        "source": "ICD2"
     },
     {
        "question": "The specific type of grammar that was the main focus of the portion of the Syntax Analysis chapter that was assigned was ANSWER",
        "answer": "LL(1)",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "In a context-free grammar, the nonterminal that corresponds to a entire member of the language being defined is called ANSWER",
        "answer": "a start symbol",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "Using the context-free grammar based on the two rules A -> b A and A -> b, ANSWER would be the derivation sequence for bbb",
        "answer": "A => Ab => Abb => bbb",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "ANSWER is the regular expression that corresponds to the language defined by the context-free grammar with the three rules A -> A a, A -> A b, A -> a",
        "answer": "a (a|b)*",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "ANSWER would be the derivation of ((1)) in the language defined by the context-free grammar consisting of the two rules E -> ( E ) and E -> 1.",
        "answer": "E => (E) => ((E)) => ((1))",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "ANSWER are two derivations of the string cc that produce distinct syntax trees from the context-free grammar X -> X c Y , Y -> X  Y -> and X -> .",
        "answer": "X => XcY => XcYcY => cYcY => ccY => cc and X => XcY => XcX => XcXcY => cXcY => ccY => cc",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "When a grammar can produce two distinct syntax trees for the same string, the grammar is said to be ANSWER",
        "answer": "ambiguous",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "If I wanted to fix the grammar E -> E + E and E -> id, so that it would only produce one syntax that is left recursive, the new grammar would be ANSWER",
        "answer": "E -> E + F and E -> F and F -> id",
        "note": "the actual name of the nonterminals doesn't matter as long as they have this pattern of usage",
        "source": "ICD2"
     },
     {
        "question": "One aspect of the if then else end syntax of Ruby is that it avoids the ANSWER problem",
        "answer": "dangling else",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "In the context-free grammar A -> B A , B -> A B, A -> B, A -> a, B -> b, and B ->  the value of Nullable(A) is ANSWER",
        "answer": "true",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "In the context-free grammar A -> B A , B -> A B, A -> a, B -> b, B ->  the value of Nullable(A) is ANSWER",
        "answer": "false",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "In the context-free grammar A -> B A , B -> A B, A -> B, A -> a, B -> b, and B ->  the value of FIRST(A) is ANSWER",
        "answer": "{a,b}",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "In the context-free grammar A -> B A , B -> A B, A -> a, B -> b, B ->  the value of FIRST(A) is ANSWER",
        "answer": "{a,b}",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "In the context-free grammar A -> B A , B -> A B, A -> B, A -> a, B -> b, and B ->  the value of FOLLOW(A) is ANSWER",
        "answer": "{a,b}",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "In the context-free grammar A -> B A , B -> A B, A -> a, B -> b, B ->  the value of FOLLOW(A) is ANSWER",
        "answer": "{b}",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "The context-free grammar A -> B A , B -> A B, A -> a, B -> b, B ->  is not LL(1) specifically because ANSWER",
        "answer": "FIRST(BA) and FIRST(a) both include a, so we do not know which A rule to use",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "When you write a parser for a context-free grammar that satisfies the LL(1) criteria by representing each non-terminal by a function that chooses what functions to invoke by the LL(1) criteria, this sort of parser is called ANSWER",
        "answer": "a recursive descent parser",
        "note": "optional note",
        "source": "ICD2"
     },
     {
        "question": "Programming languages that view programming as describing a step-by-step process to do something are called ANSWER languages",
        "answer": "imperative",
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "Programming languages that view programming as describing characteristics of the problem domain and characteristics of the solution and leaving it to the language processor to find a solution are called ANSWER languages",
        "answer": "declarative",
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "Programming languages that view programming as describing a step-by-step process to do something are called ANSWER languages",
        "answer": "imperative",
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the most natural way to express the fact that a lion is a cat is ANSWER",
        "answer": ["cat(lion).", "is_a(lion, cat)."],
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the most natural way to express the query what animals are cats is ANSWER",
        "answer": ["cat(What).", "cats(What).", "is_a(What, cat).", "are(What, cats)."],
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the most natural way to express the rule that I am an ancestor of you if I am a parent of you is ANSWER",
        "answer": "ancestor(I, You) :- parent(I, You).",
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the most natural way to express the rule that I am an ancestor of you if I am a parent of an ancestor of you is ANSWER",
        "answer": "ancestor(I, You) :- parent(I, Ancestor), ancestor(Ancestor, You). ",
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the expression hi(X, 4) = hi(3, Y) causes X to have the value ANSWER",
        "answer": "3",
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the expression hi(X, 4) = hi(3, Y) causes Y to have the value ANSWER",
        "answer": "4",
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the expression hi(X, 4) = hi(3, X) causes X to have the value ANSWER",
        "answer": ["X will not be bound and the expression will fail", "X will be bound"],
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the expression [1, 2, 3] = [X | Y] causes X to have the value ANSWER",
        "answer": "1",
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the expression [1, 2, 3] = [X | Y] causes Y to have the value ANSWER",
        "answer": "[2, 3]",
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the expression X = [[1,2] | [3,4]] causes X to have the value ANSWER",
        "answer": "[[1, 2], 3, 4]",
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the expression X = 1 + 2 causes X to have the value ANSWER",
        "answer": "1+2",
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the expression 2 = 1 + X causes X to have the value ANSWER",
        "answer": ["X remains unbound","X remains unbound and the expression fails"],
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "In Prolog, the expression that would cause an unbound variable X to take on the sum of the values of a bound variable Y and a bound variable Z is ANSWER",
        "answer": "X is Y + Z",
        "note": "optional note",
        "source": "SLSW4"
     },
     {
        "question": "Each named object will have ANSWER, where the name is defined as a synonym for the object.",
        "answer": "a declaration",
        "note": "optional note",
        "source": "ICD3"
     },
     {
        "question": "The technical term for connecting a name with an object is called ANSWER.",
        "answer": "binding",
        "note": "optional note",
        "source": "ICD3"
     },
     {
        "question": "The portion of the program where the name is visible is called its ANSWER",
        "answer": "scope",
        "note": "optional note",
        "source": "ICD3"
     },
     {
        "question": "When the structure of the syntax tree is used to determine which object corresponds to a name, this is called ANSWER.",
        "answer": ["static scoping","lexical scoping"],
        "note": "optional note",
        "source": "ICD3"
     },
     {
        "question": "A compiler typically keeps track of which names are associated with which objects by using ANSWER",
        "answer": ["a symbol table", "an environment"],
        "note": "optional note",
        "source": "ICD3"
     },
     {
        "question": "ANSWER data structures have the property that no operation on the structure will destroy or modify it.",
        "answer": ["persistent", "functional"],
        "note": "optional note",
        "source": "ICD3"
     },
     {
        "question": "ANSWER data structures have the property that there are operations on the structure can destroy or modify it.",
        "answer": ["imperative", "destructively updated"],
        "note": "optional note",
        "source": "ICD3"
     },
     {
        "question": "Since a compiler may have to look up what object is associated with a name many times, it is typical to use ANSWER to avoid linear search times.",
        "answer": "hash tables",
        "note": "optional note",
        "source": "ICD3"
     },
     {
        "question": "In the example interpreter for evaluating expressions, in the row labelled id, we have the code: v = lookup(vtable, getname(id)) ; if v = unbound then error() else v.  It says getname(id) instead of id, because ANSWER",
        "answer": "id indicates a token with a type and value field",
        "note": "optional note",
        "source": "ICD4"
     },
     {
        "question": "In the example interpreter for evaluating expressions, in the row labelled id, we have the code: v = lookup(vtable, getname(id)) ; if v = unbound then error() else v.  The value of v would be unbound in the situation that ANSWER",
        "answer": ["getname(id) was not declared","getname(id) was not bound"],
        "note": "optional note",
        "source": "ICD4"
     },
     {
        "question": "In the example interpreter for evaluating expressions, in the row labelled id(Exps), we have the code: args = EvalExps(Exps,vtable,ftable).  We pass vtable to EvalExps to handle ANSWER",
        "answer": "expressions that contain identifiers",
        "note": "optional note",
        "source": "ICD4"
     },
     {
        "question": "In the example interpreter for evaluating expressions, in the row labelled id(Exps), we have the code: args = EvalExps(Exps,vtable,ftable).  We pass ftable to EvalExps to handle ANSWER",
        "answer": "expressions that contain function usages",
        "note": "optional note",
        "source": "ICD4"
     },
     {
        "question": "In the example interpreter for evaluating expressions, in the row labelled let id = Exp1 in Exp2, we have the code: v1 = EvalExp(Exp1, vtable, ftable); vtableP = bind(vtable, getname(id), v1), EvalExp(Exp2, vtableP, ftable).  The bind function changes vtable into vtableP by ANSWER",
        "answer": "inserting the association of getname(id) with the value v1 into the table",
        "note": "optional note",
        "source": "ICD4"
     },
     null
  ]
}
