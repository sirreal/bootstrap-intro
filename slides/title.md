# Bootstrap

> Bootstrap es el _framework_ HTML, CSS y JS más popular
> para diseñar proyectos web _responsivos_ y _móvil-primero_

[getbootstrap.com](http://getbootstrap.com)



---

Creación en Twitter

* Mark Otto [@mdo](https://twitter.com/mdo) ([github](https://github.com))
* Jacob Thornton [@fat](https://twitter.com/fat) ([medium](https://medium.com/))

[Proyecto open source](https://github.com/twbs/bootstrap)

* &gt; 11.000 revisiones
* &gt; 30 versiones
* &gt; 600 participantes (desarrolladores)
* ¿¿ Uso ?? &gt; 100.000 páginas

Actualmente v3.3.4

v4 próximamente...

---

# Ejemplos

[Galería: Bootstrap Expo](http://expo.getbootstrap.com/)

## Bootsrap base

* [MariaDB](https://mariadb.org/)
* [Regex Crossword](http://regexcrossword.com/)
* [Starbound Map](http://www.starboundmap.com/)


---


# Uso

* [Observatoire de la Plasturgie](http://www.observatoire-plasturgie.com/)
* [Horizon Entrepreneurs](http://blog.horizonentrepreneurs.fr/)
* [La Grande Chancellerie de la Légion d'honneur](http://www.legiondhonneur.fr/fr)


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
