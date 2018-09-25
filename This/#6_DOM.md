## Passing 'this' to an onclick event

```html
<script type="text/javascript">
var foo = function(param)
{
    param.innerHTML = "Not a button";

};
</script>
<button onclick="foo(this)" id="bar">Button</button>
```

```html
<script type="text/javascript">
document.getElementById('bar').onclick = function() {
    this.innerHTML = "Not a button";
};
</script>
<button id="bar">Button</button>
```