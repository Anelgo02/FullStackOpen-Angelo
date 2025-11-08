import Part from './Part'

const Content = ({ parts }) => {
    console.log('Content component loaded correctly props', parts)
    return (
        <>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </>

    )
}

export default Content