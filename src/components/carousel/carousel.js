import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";
export default class carousel extends Component{
    render(){
        return(
            <Carousel>
<Carousel.item>
    <img className="d-block w-100"
    src="https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltd8a7795d91122b89/6025e878c484333be943db63/D2R_DiabloResurrected_Logo_blizz.png?format=png" alt="diablo"/>
<Carousel.caption>
<div class="sl">
<div class="k-2">
            <a href="#">
                <h2>Зло возродилось</h2></a></div>
            <a href="#">    
            <div class="but"> Приобрести</div></a>

</div>
</Carousel.caption>
</Carousel.item>

<Carousel.item>
    <img className="d-block w-100"
    src="https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltd8a7795d91122b89/6025e878c484333be943db63/D2R_DiabloResurrected_Logo_blizz.png?format=png" alt="diablo"/>
<Carousel.caption>
<div class="sl">
<div class="k-2">
            <a href="#">
                <h2>Возвращение легенды</h2></a></div>
            <a href="#">    
            <div class="but"> Приобрести</div></a>

</div>
</Carousel.caption>
</Carousel.item>

<Carousel.item>
    <img className="d-block w-100"
    src="https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltd8a7795d91122b89/6025e878c484333be943db63/D2R_DiabloResurrected_Logo_blizz.png?format=png" alt="diablo"/>
<Carousel.caption>
<div class="sl">
<div class="k-2">
            <a href="#">
                <h2>Зло вернулось</h2></a></div>
            <a href="#">    
            <div class="but"> Приобрести</div></a>

</div>
</Carousel.caption>
</Carousel.item>
            </Carousel>
        )
    }

}
