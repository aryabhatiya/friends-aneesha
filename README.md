call<sub>module</sub>()
=======================

|                               |                  |     |              |                  |                       |
|-------------------------------|------------------|-----|--------------|------------------|-----------------------|
| friends-aneesha               |                  |     |              |                  |                       |
| A Javascript Bootstrat Devops | Semantic-release | TDD | Microlibrary | Community Driven | Reproducable Research |

[![travis build](https://img.shields.io/travis/chowdhuryashraf/friends-aneesha.svg)](https://travis-ci.org/chowdhuryashraf/friends-aneesha)
[![Codecov coverage](https://img.shields.io/codecov/c/github/chowdhuryashraf/friends-aneesha.svg)](https://codecov.io/github/chowdhuryashraf/friends-aneesha)
[![npm](https://img.shields.io/npm/v/friends-aneesha.svg)](https://www.npmjs.com/package/friends-aneesha)
[![npm](https://img.shields.io/npm/dm/friends-aneesha.svg)](https://www.npmjs.com/package/friends-aneesha)
[![npm](https://img.shields.io/npm/v/friends-aneesha.svg)](https://www.npmjs.com/package/friends-aneesha)

Npm module INIT
===============

CLOCK: \[2016-01-13 Wed 04:48\]--\[2016-01-13 Wed 04:55\] =&gt; 0:07

      npm set init-author-email $EMAIL
      npm set init-author-url $URL
      npm set init-license=MIT
      npm set save-exact true
      echo $EMAIL $URL

*npm rc* for npm setting
------------------------

Add npm user
------------

CLOCK: \[2016-01-13 Wed 08:12\]--\[2016-01-13 Wed 08:35\] =&gt; 0:23 CLOCK: \[2016-01-13 Wed 07:52\]--\[2016-01-13 Wed 08:12\] =&gt; 0:20 CLOCK: \[2016-01-13 Wed 06:10\]--\[2016-01-13 Wed 06:11\] =&gt; 0:01

``` example
command  is sended to /tmp/friends-aneesha
```

npm init
--------

### Check NPM Version

    npm version

### init cmd

``` example
command  is sended to /tmp/friends-aneesha
```

### [package](./package.json)

init module
===========

Module firend<sub>anneesha</sub>
--------------------------------

### Install unique-random-array

    npm install unique-random-array

``` javascript
var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./friends-names.json');

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};
```

data init
---------

``` javascript
[
  "Aneesha",
  "Ghumpori",
  "Maliha",
  "Shamaila",
  "Liana",
  "Asia",
  "Arjab",
  "Esha",
  "Rumaita",
  "Faiz",
  "Aiyan"
]
```

import library
--------------

      let lib = require(process.cwd() + '/src/index.js');
      console.log('|random friend | ' + lib.random());
      console.log('|list of friends| ' + lib.all);

|                 |                                                                           |
|-----------------|---------------------------------------------------------------------------|
| random friend   | Arjab                                                                     |
| list of friends | Aneesha,Ghumpori,Maliha,Shamaila,Liana,Asia,Arjab,Esha,Rumaita,Faiz,Aiyan |

:END:

Setup GIT
=========

Prepare *README.md*
-------------------

``` elisp
  (defun ash-append-string-to-file (s filename)
    (with-temp-buffer
      (insert s)
      (when (file-writable-p filename)
         (write-region (point-min) (point-max) filename nil))))
  (ash-append-string-to-file (concat "# " filename "\n" ) "README.md" )
```

### Prepare Test

``` elisp
  (defun file-string (file)
    "Read the contents of a file and return as a string."
    (with-temp-buffer
      (insert-file-contents file)
      (buffer-string)))
  (file-string "README.md")
```

Git Init
--------

``` bash
git init
git remote add origin https://github.com/chowdhuryashraf/friends-aneesha.git
git remote -v
```

Npm publish
===========

Publish to npm
--------------

CLOCK: \[2016-01-13 Wed 15:04\]--\[2016-01-13 Wed 15:05\] =&gt; 0:01

``` bash
npm publish
```

Check details
-------------

``` bash
npm info friends-aneesha
```

Deploy other place
------------------

CLOCK: \[2016-01-13 Wed 14:39\]--\[2016-01-13 Wed 15:04\] =&gt; 0:25

``` bash
npm install friends-aneesha
```

``` elisp
(expand-file-name "node_modules/")
```

    let friendsAneesha = require(path + 'friends-aneesha')
    console.log(friendsAneesha.all);
    console.log(friendsAneesha.random());
    console.log(friendsAneesha.random());
    console.log(friendsAneesha.random());
    console.log(friendsAneesha.random());

Git TAG
=======

``` bash
git tag $tag
```

Adding 2 names in aneesha's [friend list](file:///usr/local/src/microlibrary/friends-aneesha/src/friends-names.json)
--------------------------------------------------------------------------------------------------------------------

``` example
@@ -1,4 +1,3 @@
-
 [
   "Aneesha",
   "Ghumpori",
@@ -10,5 +9,7 @@
   "Esha",
   "Rumaita",
   "Faiz",
-  "Aiyan"
+  "Aiyan",
+  "Baby Baby2",
+  "Bandhan"
 ]

```

Update Git Tag
--------------

``` example
nil
```

package.json
------------

``` example
modified   package.json
@@ -1,6 +1,6 @@
 {
   "name": "friends-aneesha",
-  "version": "1.0.0",
+  "version": "1.4.0-beta.0",
```

Publish Beta release to Npm
---------------------------

``` bash
npm publish --tag beta
```

### Get info

    npm info

Deploy other place
------------------

CLOCK: \[2016-01-13 Wed 14:39\]--\[2016-01-13 Wed 15:04\] =&gt; 0:25

``` bash
npm install friends-aneesha@beta
```

``` elisp
(expand-file-name "node_modules/")
```

    let friendsAneesha = require(path + 'friends-aneesha')
    console.log(friendsAneesha.all);
    console.log(friendsAneesha.random());
    console.log(friendsAneesha.random());
    console.log(friendsAneesha.random());
    console.log(friendsAneesha.random());

Test
====

Test friends-aneesha@1.4.0-beta.0
=================================

Adding test libraries mocha chai
--------------------------------

``` bash
npm install --save-dev mocha
```

``` bash
npm install --save-dev chai
```

``` bash
npm list mocha chi
```

``` bash
npm list
```

wrote [test module](src/index.test.js)
--------------------------------------

``` javascript
var expect = require('chai').expect;
var friends = require('./index');

describe('firends-anneesha', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(friends.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
           return typeof item === 'string';
        });
      }
    });
    it('should contain `bandhan`', function() {
      expect(friends.all).to.include('Bandhan');
    });
  });
  describe('random', function() {
    it('should return a random item from the starWars.all', function() {
      var randomItem = friends.random();
      expect(friends.all).to.include(randomItem);
    });
  });
});
```

Automating Releases with semantic-release
=========================================

install & canfigure semantic-release-cli
----------------------------------------

``` example
command  is sended to /tmp/friends-aneesha
```

install semantic-release
------------------------

``` example
command  is sended to /tmp/friends-aneesha
```

install commitizen and cz-conventional-changelog
------------------------------------------------

``` example
command  is sended to /tmp/friends-aneesha
```

``` bash
npm list commitizen  cz-conventional-changelog
```

``` bash
ls -l node_modules/commitizen/bin/commitizen
```

``` example
command  is sended to /tmp/friends-aneesha
```

Update [Travis CI ](.travis.yml)
--------------------------------

commit git with npm
-------------------

``` example
command  is sended to /tmp/friends-aneesha
```

Add new feature **returns array of random number**
==================================================

``` example
*** /tmp/ediff25330DRd  2016-01-18 16:26:52.536000000 -0500
--- /tmp/ediff25330Qbj  2016-01-18 16:26:52.540000000 -0500
***************
*** 1,8 ****
-
  var uniqueRandomArray = require('unique-random-array');
! var starWarsNames = require('./friends-names.json');

  module.exports = {
!   all: starWarsNames,
!   random: uniqueRandomArray(starWarsNames)
  };
--- 1,20 ----
  var uniqueRandomArray = require('unique-random-array');
! var nameOfFriendsOfAneesha = require('./friends-names.json');
! var getRandomItem = uniqueRandomArray(nameOfFriendsOfAneesha);
! var randomItems = [];

  module.exports = {
!   all: nameOfFriendsOfAneesha,
!   random: random
  };
+
+ function random(number){
+   if (number === undefined){
+     return getRandomItem();
+   }
+   if ( number > 0 ){
+     randomItems.push(getRandomItem());
+     return random( number - 1);
+   }
+   return randomItems;
+ }

```

``` example
*** /tmp/ediff25330QpL  2016-01-18 16:37:28.704000000 -0500
--- /tmp/ediff25330dzR  2016-01-18 16:37:28.704000000 -0500
***************
*** 21,25 ****
--- 21,33 ----
        var randomItem = friends.random();
        expect(friends.all).to.include(randomItem);
      });
+
+     it('should return an array of random items if passed a number', function() {
+       var randomItems = friends.random(3);
+       expect(randomItems).to.have.length(3);
+       randomItems.map(function(item) {
+         expect(friends.all).to.include(item);
+       });
+     });
    });
  });

```

run npm git
-----------

and test:single
---------------

``` example
*** /tmp/ediff253305Js  2016-01-18 17:13:14.748000000 -0500
--- /tmp/ediff25330GUy  2016-01-18 17:13:14.752000000 -0500
***************
*** 12,17 ****
  before_script:
    - npm prune
  script:
!   - npm run test
  after_success:
    - npm run semantic-release
--- 12,17 ----
  before_script:
    - npm prune
  script:
!   - npm run test:single
  after_success:
    - npm run semantic-release

```

``` example
*** /tmp/ediff25330xuB  2016-01-18 21:46:12.580000000 -0500
--- /tmp/ediff25330-4H  2016-01-18 21:46:12.584000000 -0500
***************
*** 13,20 ****
      "mocha": "2.3.4",
      "semantic-release": "^4.3.5"
    },
!   "czConfig": {
!     "path": "node_modules/cz-conventional-changelog"
    },
    "scripts": {
      "commit": "git-cz",
--- 13,22 ----
      "mocha": "2.3.4",
      "semantic-release": "^4.3.5"
    },
!   "config": {
!     "commitizen": {
!       "path": "./node_modules/cz-conventional-changelog"
!     }
    },
    "scripts": {
      "commit": "git-cz",
***************
*** 32,35 ****
    ],
    "author": "Chowdhury Ashraf",
    "license": "MIT"
! }
--- 34,37 ----
    ],
    "author": "Chowdhury Ashraf",
    "license": "MIT"
! }
\ No newline at end of file

```

run npm git
-----------

``` example
command  is sended to /tmp/friends-aneesha
```

Automatically running tests before commits with ghooks
======================================================

``` bash
npm i -D ghooks
```

``` example
*** /tmp/ediff25330ACK  2016-01-18 22:08:07.960000000 -0500
--- /tmp/ediff25330NMQ  2016-01-18 22:08:07.960000000 -0500
***************
*** 10,21 ****
--- 10,25 ----
      "chai": "3.4.1",
      "commitizen": "2.5.0",
      "cz-conventional-changelog": "1.1.5",
+     "ghooks": "1.0.3",
      "mocha": "2.3.4",
      "semantic-release": "^4.3.5"
    },
    "config": {
      "commitizen": {
        "path": "./node_modules/cz-conventional-changelog"
+     },
+     "ghooks": {
+       "pre-commit": "npm run test:single"
      }
    },
    "scripts": {
***************
*** 34,37 ****
    ],
    "author": "Chowdhury Ashraf",
    "license": "MIT"
! }
\ No newline at end of file
--- 38,41 ----
    ],
    "author": "Chowdhury Ashraf",
    "license": "MIT"
! }

```

``` bash
<<cmdaync("npm run commit")>>
```

``` example
nil
```

Adding code coverage recording with Istanbul
============================================

Installation
------------

``` example
command  is sended to /tmp/friends-Ganesha
```

Configuration diff
------------------

``` example
*** /tmp/ediff25330zdd  2016-01-19 08:17:56.912000000 -0500
--- /tmp/ediff25330Aoj  2016-01-19 08:17:56.920000000 -0500
***************
*** 26,32 ****
    "scripts": {
      "commit": "git-cz",
      "test": "mocha src/index.test.js -w",
!     "test:single": "mocha src/index.test.js",
      "semantic-release": "semantic-release pre && npm publish && semantic-release post"
    },
    "repository": {
--- 26,32 ----
    "scripts": {
      "commit": "git-cz",
      "test": "mocha src/index.test.js -w",
!     "test:single": "istanbul cover -x *.test.js _mocha -- -R spec src/index.test.js",
      "semantic-release": "semantic-release pre && npm publish && semantic-release post"
    },
    "repository": {

```

test and commpit
----------------

``` example
command  is sended to /tmp/friends-aneesha
```

``` example
nil
```

Add coverage checking
---------------------

``` example
*** /tmp/ediff253304p0  2016-01-19 10:09:50.384000000 -0500
--- /tmp/ediff25330qzD  2016-01-19 10:09:50.384000000 -0500
***************
*** 18,20 ****
--- 18,24 ----
    }
    return randomItems;
  }
+
+ function doSomethings() {
+   console.log('hi');
+ }

```

``` example
command  is sended to /tmp/friends-Ganesha
```

``` example
command  is sended to /tmp/friends-aneesha
```

New feature **pair**
====================

``` example
command  is sended to /tmp/friends-aneesha
```

codecov.io
==========

################ add configuration

``` example
*** /tmp/ediff17310uWU  2016-01-19 14:30:07.176000000 -0500
--- /tmp/ediff173107ga  2016-01-19 14:30:07.180000000 -0500
***************
*** 8,13 ****
--- 8,14 ----
    },
    "devDependencies": {
      "chai": "3.4.1",
+     "codecov.io": "0.1.6",
      "commitizen": "2.5.0",
      "cz-conventional-changelog": "1.1.5",
      "ghooks": "1.0.3",
***************
*** 30,35 ****
--- 31,37 ----
      "test:single": "istanbul cover -x *.test.js _mocha -- -R spec src/index.test.js",
      "semantic-release": "semantic-release pre && npm publish && semantic-release post",
      "check-coverage": "istanbul check-coverage --statements 100 --branches 100 --functions 100 --lines 100"
+     "report-coverage": "cat ./coverage/lcov.info | codecov"
    },
    "repository": {
      "type": "git",

```

``` example
@@ -15,6 +15,7 @@ script:
   - npm run test:single
   - npm run check-coverage
 after_success:
+  - npm run report-coverage
   - npm run semantic-release
 branches:
   except:
```

feat(pair): make circular pair with mod.
========================================

closes \#4 BREAKING CHANGE: sequential to circular pair

################ code

``` example
@@ -22,7 +22,7 @@ function random(number){

 function pair(n) {
   var sequence = [];
-  sequence[0] = nameOfFriendsOfAneesha[n-1];
-  sequence[1] = nameOfFriendsOfAneesha[n];
+  sequence[0] = nameOfFriendsOfAneesha[ (n -1 ) % nameOfFriendsOfAneesha.length ];
+  sequence[1] = nameOfFriendsOfAneesha[ n % nameOfFriendsOfAneesha.length ];
   return sequence;
 }

```

``` example
@@ -40,5 +40,11 @@ describe('firends-anneesha', function() {
       expect(friendshipSequece1[0]).is.equal("Liana")
       expect(friendshipSequece1[1]).is.equal("Asia")
     });
+
+    it('should return circular', function() {
+      var friendshipSequece = friends.pair(13);
+      expect(friendshipSequece[0]).is.equal("Bandhan");
+      expect(friendshipSequece[1]).is.equal("Aneesha");
+    } );
   });
 });


```

update tag
==========

``` example
command  is sended to /tmp/friends-aneesha
```

[Add cerficatges](http://shields.io/) in readme
===============================================

Emacs Setups
============

``` example
nil
```

``` elisp
  (last
   (split-string
    (replace-regexp-in-string "/" " "   (expand-file-name "")) ))
```

bages
-----

``` example
[![travis build](https://img.shields.io/travis/chowdhuryashraf/friends-aneesha.svg)](https://travis-ci.org/chowdhuryashraf/friends-aneesha)
[![Codecov coverage](https://img.shields.io/codecov/c/github/chowdhuryashraf/friends-aneesha.svg)](https://codecov.io/github/chowdhuryashraf/friends-aneesha)
[![npm](https://img.shields.io/npm/v/friends-aneesha.svg)](https://www.npmjs.com/package/friends-aneesha)
[![npm](https://img.shields.io/npm/dm/friends-aneesha.svg)](https://www.npmjs.com/package/friends-aneesha)
[![npm](https://img.shields.io/npm/v/friends-aneesha.svg)](https://www.npmjs.com/package/friends-aneesha)
```

Npm module INIT `=============`

Keyboard Macro for diff
-----------------------

``` example
;; Original keys: e D NUL ESC > ESC w C-x C-o C-x o C-x o C-x C-o C-x o q y

Command: last-kbd-macro
Key: none

Macro:

e           ;; self-insert-command
D           ;; self-insert-command
NUL         ;; set-mark-command
ESC >           ;; end-of-buffer
ESC w           ;; kill-ring-save
C-x C-o         ;; delete-blank-lines
C-x o           ;; other-window
C-x o           ;; other-window
C-x C-o         ;; delete-blank-lines
C-x o           ;; other-window
q           ;; self-insert-command
y           ;; self-insert-command

```

``` elisp
(fset 'ashdiff
   (lambda (&optional arg) "Keyboard macro." (interactive "p") (kmacro-exec-ring-item (quote ("eD>woooqy" 0 "%d")) arg)))
```

Send data to PIPE
-----------------

CLOCK: \[2016-01-13 Wed 05:47\]--\[2016-01-13 Wed 05:58\] =&gt; 0:11

``` bash
<<check_pipeserver_running>>
echo  $cmd   > $pipe
```

### check<sub>pipeserverrunning</sub>

``` bash
pipe="/tmp/"$mod
[ ! -p $pipe ] && exit 1 || echo "command $DT is sended to $pipe"
```

``` example
command  is sended to /tmp/friends-aneesha
```

### test Inline if

``` bash
if [ $counter -eq 1 ] then; echo "true";
```

Install Pandoc
--------------

``` example
command  is sended to /tmp/friends-aneesha
```

``` example
command  is sended to /tmp/friends-aneesha
```

Pandoc org to markdown<sub>github</sub>
---------------------------------------

``` bash
/root/.cabal/bin/pandoc --from org --to markdown_github -o $dst $src
```

run git macro
-------------

``` elisp
(fset 'npmcommit
   (lambda (&optional arg) "Keyboard macro." (interactive "p") (kmacro-exec-ring-item (quote ("eDhwoooqyo<s     <e OAOAOAo" 0 "%d")) arg)))
```

``` example
;; Original keys: # + c a 2*l : SPC c m d a y n c ( " n p m SPC r u n SPC c o 2*m i t " ) C-a C-c C-c

Command: last-kbd-macro
Key: none

Macro:

#           ;; self-insert-command
+           ;; self-insert-command
c           ;; self-insert-command
a           ;; self-insert-command
2*l         ;; self-insert-command
:           ;; self-insert-command
SPC         ;; self-insert-command
c           ;; self-insert-command
m           ;; self-insert-command
d           ;; self-insert-command
a           ;; self-insert-command
y           ;; self-insert-command
n           ;; self-insert-command
c           ;; self-insert-command
(           ;; self-insert-command
"           ;; self-insert-command
n           ;; self-insert-command
p           ;; self-insert-command
m           ;; self-insert-command
SPC         ;; self-insert-command
r           ;; self-insert-command
u           ;; self-insert-command
n           ;; self-insert-command
SPC         ;; self-insert-command
c           ;; self-insert-command
o           ;; self-insert-command
2*m         ;; self-insert-command
i           ;; self-insert-command
t           ;; self-insert-command
"           ;; self-insert-command
)           ;; self-insert-command
C-a         ;; org-beginning-of-line
C-c C-c         ;; org-ctrl-c-ctrl-c

```
