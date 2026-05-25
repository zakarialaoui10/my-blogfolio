import {tags} from 'ziko/dom'
const { button, span} = tags

export function BurgerMenuToggle(){
    return button(
        {
        'aria-label' : 'Toggle navigation interface',
         'aria-expanded' : false
        },
        span({class : 'burger-bar'}),
        span({class : 'burger-bar'}),
        span({class : 'burger-bar'})
    ).onClick(
        e => {
            const isOpen = e.target.element.classList.toggle('is-active');
            
        } 
    )
}