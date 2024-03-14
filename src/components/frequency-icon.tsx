// eslint-disable-next-line import/no-absolute-path
import Image from 'next/image'
// eslint-disable-next-line import/no-absolute-path
import frequency from '/public/images/frequency-icon.svg'

export function FrequencyIcon() {
  return (
    <div className="flex items-center justify-center p-[1px] rounded-full bg-gradient-to-b from-orange from-0% to-dark-orange/0 to-40%">
      <div className="flex items-center justify-center p-[10px] rounded-full bg-black">
        <div className="flex items-center justify-center p-[1px] rounded-full bg-gradient-to-b from-orange to-dark-orange/0 to-45%">
          <div className="flex items-center justify-center p-[10px] rounded-full bg-gradient-to-b from-orange from-[-30%] to-black to-10%">
            <div className="flex items-center justify-center p-[1px] rounded-full bg-gradient-to-b from-orange from-0% to-dark-orange/0 to-50%">
              <div className="rounded-full p-5 flex items-center justify-center bg-gradient-to-b from-orange from-[-30%] to-black to-15%">
                <Image
                  src={frequency}
                  alt="Sinal de Frequência - Logo alternativa da Bewave"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
