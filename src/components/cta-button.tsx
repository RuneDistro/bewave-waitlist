import { FiArrowRight } from 'react-icons/fi'

export function CTAButton() {
  return (
    <div className="button-wrapper">
      <button className="w-[calc(100%-2px)] h-[calc(100%-2px)] absolute z-30 top-[1px] left-[1px] text-sm bg-black flex items-center justify-center gap-5 rounded-3xl focus:outline-none">
        Distribua
        <FiArrowRight size={18} />
      </button>
    </div>
  )
}
