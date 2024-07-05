---
title: "Code Structure"
description: "This is a new guide"
template: doc # This is the template for the guide, you can use `doc` or `splash`
---

## Introduction
All our code, broadly speaking, is broken up into two “buckets”: Front-end and Back-end.

We appreciate that Front-end and Back-end engineers work on different tech stacks, and would like them to be able to work independently of each other, yet as one cohesive unit.

In order to achieve this, we separate out these two buckets of code, with them only meeting when needed.

#### We follow the following sets of principles:

1. Back-end code must be completely separate and abstracted away from front-end code
    - Front-end engineers must be protected from the complexities of back-end code
    - Back-end engineers must write independent code, to be used in any context: Front-end, REST API, etc.
        
2. The front-end is disposable
    - A site may undergo a redesign
    - A site may be headless

### Back-end code
Back-end code belong in MU plugins. More information [here (link to be added)](<#>).

### Front-end code
Front-end code belong in themes. More information [here (link to be added)](<#>).
