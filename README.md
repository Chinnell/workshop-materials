# Workshop-Materials

### Getting Started

Welcome!

Let's get started by creating your very own fork of this repository. Creating a fork is important because it gives you a personal copy of this repository to use as you see fit. Click the "Fork" button in the upper right hand corner of the screen and follow the directions to create your fork. You should be taken to a new repository named _your-username/workshop-materials_

Open your koding.com server and get started by git cloning this repository into your remote machine. From the home directory, run the following command (replace **your-username**  with your github username; the command is everything **after** the $):

	treylitefm:~ $ git clone git@github.com:your-username/workshop-materials.git workshop

Output:

	Cloning into 'workshop'...
	remote: Counting objects: 3, done.                                                                                                                                                                                                                                                                                                                                        
	remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0                                                                                                                                                                                                                                                                                                              
	Receiving objects: 100% (3/3), done.
	Checking connectivity... done.
	
We want to change directories to the src (source) folder which is inside of our freshly cloned workshop project. Use pwd to see your current location in the filesystem.
    
	treylitefm:~ $ pwd

Output:

	/home/treylitefm

Change directories to the src directory.

	treylitefm:~ $ cd workshop/src

Output:

	treylitefm:~/workshop/src $

Use pwd to see your current directory once again.

	treylitefm:~/workshop/src $ pwd

Output:

	/home/treylitefm/workshop/src


Use the ls command to see all of the files inside of your current directory. In the below example, the only file in my src directory is welcome.js.

	treylitefm:~/workshop/src $ ls

Output:

	welcome.js

Run welcome.js using the node command.

	treylitefm: ~/workshop/src $ node welcome.js 

Output:

	Welcome!

Awesome! Now time to get started on the exercises! I recommend starting with hello-world.js, then greet-me.js. Directions are in each of the exercise files. Once your program is complete, refer to the next section for directions on how to push your changes to github.
<br>

### Pushing your changes to github

	treylitefm: ~/workshop/src $ git add greet-me.js
	treylitefm: ~/workshop/src $ git status

Output:

	On branch master
	Your branch is up-to-date with 'origin/master'.
 
	Changes to be committed:
  	(use "git reset HEAD <file>..." to unstage)
 
		new file:   greet-me.js

Each milestone in a project is referred to as a commit. Commits are tagged with messages so that developers know exactly what changes occur at each stage of a project. After committing, you must push your changes to github so that other developers can see the code that you've been working on. Committing and pushing are done in the following two commands.

First the commit:

	treylitefm: ~/workshop/src $ git commit -m "A message that is relevant to the changes in my file."

Output:

	[master bb58113] A message that is relevant to the changes in my file.
	1 file changed, 22 insertions(+)
	create mode 100644 src/greet-me.js

Now the push:

	treylitefm: ~/workshop/src $ git push origin master

Output:

	Counting objects: 5, done.
	Compressing objects: 100% (3/3), done.
	Writing objects: 100% (4/4), 720 bytes | 0 bytes/s, done.
	Total 4 (delta 0), reused 0 (delta 0)
	To git@github.com:treylitefm/workshop-materials.git
		dd5e2af..bb58113  master -> master

Now go to https://github.com/**your-username**/workshop-materials.git and you should see the recently pushed changes. Be sure to push all of your completed work!
