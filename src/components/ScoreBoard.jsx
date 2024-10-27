
function ScoreBoard({ score }) {

    return (
        <>

            <div className="flex flex-col gap-5">
                <div className="font-manrope font-[400] text-96 leading-56 text-[#4FE9A4]">{score}</div>
                <div className="text-lg font-[400] leading-8 text-[#F1F1F1]">Cool feature title</div>
            </div>


        </>
    )
}

export default ScoreBoard
