# cTypeLib Content-Type Javascript Library

* [Library Syntax](#library-syntax)

### Description

cTypeLib is a simple easy to use Content-Type Library for when you need to get a Content-Type for a file extension or look up a filename's Content-Type base upon it's extension.

### Library Syntax

```JavaScript
$ctype.extension
```
Returns the Content-Type string for the specified extension if it is in the library.

```JavaScript
$ctype.json

$ctype.form

$ctype.pptx
```

```JavaScript
$ctype.getType(filename_string)
```

Returns the Content-Type string for the specified filename if it is in the library.

```JavaScript
$ctype.getType('my.cool.file.css')

$ctype.getType('mylibrary.min.js')

$ctype.getType('image.png')
```



