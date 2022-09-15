import '../Header/Header.css'

const Header=()=>{

    return (
  <div className='menu'>
  <div class="content">
           <div class="logotip">
            <a href="#"><img class="logos" src="https://gamenet.ru/images/header/logo.png"/></a></div>
      <div class="mmm1"><ul>
      <li class="naw">
  
        <a href="#">Игры</a></li>
      <li><a href="#">Магазин</a></li>
      <li><a href="#">Новости</a></li>
      <li class="naw"><a href="#">Киберспорт</a></li>
       </ul>
      </div>
  <div class="mmm2"><li><a href="#">Поддержка</a></li>
  <li class="naw"><a href="#">Моя учетная запись</a></li>
  </div>
  </div>
  </div>

    )
  }
  export default Header;