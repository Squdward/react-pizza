import { Link } from "react-router-dom";
import emptyCart from "./assets/empty-cart.png";

const EmptyCart = () => {
	return (
		<div class="container container--cart">
			<div class="cart cart--empty">
				<h2>Корзина пустая <icon>😕</icon>
				</h2>
				<p>
					Вероятней всего, вы не заказывали ещё пиццу.<br />
					Для того, чтобы заказать пиццу, перейди на главную страницу.
				</p>
				<img src={emptyCart} alt="Empty cart" />
				<a href="/" class="button button--black">
					<Link to="/">
						<span>
							Вернуться назад
						</span>
					</Link>
				</a>
			</div>
		</div>
	)
}

export { EmptyCart }