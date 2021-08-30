300820210941
Tags: #z #work
____
# Elitas
Text
- list
- list

## CIT design
Text




### Process 
#### V1
- [ ] add to bg-pike
-- add JS

```
.slider {     // todo: go to real .css and change it there after finish
  background: url(../img/bg-pike--overlay.jpg);
  // background: linear-gradient(45deg, rgb(122, 90, 90) 0%, rgba(0,212,255,0) 100%);
  background-size: cover;
  // background-size: contain;
  background-repeat: no-repeat;

  // background-position: center;
  height: 800px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-width: 0;
}
```
----------------------------


#### V2
```
    // .slide__1
    &__1 {
      background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgba(0,212,255,0) 100%), url(../img/bg-pike.jpg);
      background-size: cover;
      background-repeat: no-repeat;
    }
    // .slide__2
    &__2 {
      background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgba(0,212,255,0) 100%), url(../img/scenary-instrument2.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-size: contain;
    }


- [ ] reconstruct bg (for slider)
- [x] add JS(swiper-slider)
-- adaptive
```

-----------------------------
```
// .slide__1
    &__1 {
      background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgba(0,212,255,0) 100%), url(../img/bg-pike.jpg);
      background-size: cover;
      background-repeat: no-repeat;

      @media (max-width: $screen-sm-max) {
        background: linear-gradient(45deg, rgb(0, 0, 0) 30%, rgba(0,212,255,0) 100%), url(../img/bg-pike.jpg);
      }
      @media (max-width: $screen-sm-max) {
        background-position: center;
      }


- [x] reconstruct bg (for slider)
- [x] add JS(swiper-slider) + hamburger
- [x] responsive + adaptive
```


____
### Zero-Links

- 
___
### Links
- 
