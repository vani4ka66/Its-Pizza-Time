import {formatCurrency} from './utils'
import classNames from "classnames";


export default class Notification {
  static get types() {

    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor(type, price) {
    

    this._type = type
    this._price = price

    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
    document.querySelector(".notifications").appendChild(this.container);

  }

   empty(i){
      this.container.innerHTML = ''
   }

  render() {
    const template = `
                      <div class="notification">
                        <button class="${classNames("delete")}"></button>

                        🍕 <span class="${classNames("type")}">${this._type}</span> (<span class="${classNames("price")}">${formatCurrency(this._price)}</span>) has been added to your order.
                      </div>
                          `;

    this.container.innerHTML = template;
    let arr = document.querySelectorAll('.delete')

    for(let i = 0; i < arr.length; i++){
      arr[i].addEventListener('click', function(){

        this.parentElement.parentElement.innerHTML = ""
    
      })
    }
  }
}
