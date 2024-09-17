import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.button} ${
        disabled
            ? s.disabled // если кнопка задизейблена, применяем класс s.disabled
            : xType === 'red'
                ? s.red // если тип кнопки красный, применяем класс s.red
                : xType === 'secondary'
                    ? s.secondary // если тип кнопки второстепенный, применяем класс s.secondary
                    : s.default // иначе используем класс по умолчанию
    }${className ? ' ' + className : ''}`// задачка на смешивание классов

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
