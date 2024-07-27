const Title = ({ title, className, load }) => {  
  return (  
    <div className="">  
      {load ? (  
        <div className="bg-slate-300 animate-pulse w-28 mb-3 mx-5 rounded-sm h-5"></div>  
      ) : (  
        <div  
          className={`font-semibold mx-auto my-10 text-white flex gap-2.5 items-center w-fit ${className}`}  
        >  
          {className && <div className="h-8 md:h-9 w-1.5 md:w-2 rounded bg-Secondary"></div>}  
          {title}  
        </div>  
      )}  
    </div>  
  );  
};  

export default Title;