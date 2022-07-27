import { CircleDash, CircleFull } from "./circles";


export default function CircleBgr({
    CFull1, CFull2, CFull3, CDash3,
}) {
  return (
    <>
        <div className={`absolute block ${CFull1} -z-50`}>
        <CircleFull/>
        </div>
        <div className={`absolute block ${CFull2} -z-50`}>
        <CircleFull/>
        </div>
        <div className={`absolute block ${CFull3} -z-50`}>
        <CircleFull/>
        </div>
        <div className={`absolute w-[833px] h-[833px] ${CDash3} -z-50`}>
        <CircleDash/>
        </div>
    </>
  )
}
