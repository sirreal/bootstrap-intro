# Bootstrap

> Bootstrap es el _framework_ HTML, CSS y JS más popular
> para diseñar proyectos web _responsivos_ y _móvil-primero_

[getbootstrap.com](http://getbootstrap.com)



---

Creación en Twitter

* Mark Otto [@mdo](https://twitter.com/mdo) ([github](https://github.com))
* Jacob Thornton [@fat](https://twitter.com/fat) ([medium](https://medium.com/))

[Proyecto open source](https://github.com/twbs/bootstrap)

* 11.000+ revisiones
* 600+ contribuyentes
* 30+ versiones (v3.3.4)
* 100.000+ páginas...

---

# Demo

---

# Consejos

---

## No mezclar distribución con presentación

```html
<div class="container well">
  <div class="row">
    <div class="col-xs-6">
      MAL .container.well
    </div>
  </div>
</div>
<div class="container">
  <div class="well">
    <div class="row">
      <div class="col-xs-6">
        BIEN .container > .well
      </div>
    </div>
  </div>
</div>
```

[Ejemplo](/ex/mezclar.html)
