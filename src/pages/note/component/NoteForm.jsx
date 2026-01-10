const NoteForm = ({ type,onsubmit, title, setTitle ,description ,setdescription }) => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <form onSubmit={onsubmit}>
        <div className="bg-lime-200 flex flex-col border-none rounded-md p-10 w-md font-mono">
          <h2 className="font-bold text-2xl text-center">{type==='createnote' ?"Add a New Note" :"Edit Note"}</h2>
          <label htmlFor="title"> title </label>
          <input
            type="text"
            name=""
            id="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="bg-white p-1 border-none rounded-xl mb-1"
            required
          />

          <label htmlFor="description">description</label>
          <textarea
            id="description"
            rows="6"
            cols="10"
            value={description}
            onChange={(e)=>setdescription(e.target.value)}
            className="bg-white p-1 border-none rounded-xl mb-5"
            required
          />
          <button
            type="submit"
            className="bg-lime-600 font-semibold p-2 border-none rounded-md"
          >
           {type === 'createNote' ?"Add":"Edit"} 
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm
