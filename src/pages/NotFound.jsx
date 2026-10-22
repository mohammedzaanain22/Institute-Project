import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
       
        <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest">404</h1>
        
       
        <div className="bg-indigo-500 text-white px-2 text-sm rounded rotate-12 absolute -mt-16 ml-28">
          الصفحة غير موجودة
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mt-4">عذراً، لم نتمكن من العثور على هذه الصفحة</h2>
        <p className="text-gray-600 mt-2 mb-8 max-w-md mx-auto">
          يبدو أن الرابط الذي قمت بزيارته قد تم إزالته، أو تم تغييره، أو أنه غير صحيح مؤقتاً.
        </p>

       
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}