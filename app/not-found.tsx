import { UndrawNotfound } from "features/common/components/svgs";

export default function NotFound() {
  return (
    <div className="z-20 px-8 sp:px-4 tab:px-0 h-[calc(100vh-209px)]">
      <div className="flex flex-col justify-center items-center
                      h-full min-w-full ">
        <UndrawNotfound className="mb-4 w-60 h-auto tab:w-80" />
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          404 - Page Not Found
        </h1>
        <p className="mb-4">You seem to have wandered into a sea of the Internet.<br />
          Click the title at the top left of the screen to return home</p>
      </div>
    </div>
  )
}
