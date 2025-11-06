export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
};

export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
      <h3 className="text-red-800 font-semibold mb-2">
        Error al cargar contenido
      </h3>
      <p className="text-red-600">{message}</p>
    </div>
  );
};
