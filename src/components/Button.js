export const Button =({style, content}) => {
    return (
        <button className='py-8 px-24 rounded-8 bg-btn text-white font-bold {style}'>
            {content}
        </button>
    )
}