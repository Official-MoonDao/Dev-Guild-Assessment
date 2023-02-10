/*
⚠ WARNING ⚠ 
DO NOT CHANGE THIS FILE BEFORE YOU'VE FINISHED THE TUTORIAL, 
IT WILL COUNT AGAINST YOUR FINAL ASSESMENT
*/

export default function MainCard({ children }: any) {
  return (
    <div className="flex flex-col justify-center items-center card min-w-80 p-6 rounded-[15px] border-[0.5px] border-gray-300 bg-black bg-opacity-30 shadow-indigo-40 text-white font-RobotoMono shadow-md overflow-visible">
      {children}
    </div>
  );
}
