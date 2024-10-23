export default function Home() {
  return (
    <div className="bg-white w-full max-h-screen text-black">
      <h2 className="pt-24 pl-10 text-4xl font-sans font-bold">
        Welcome To Our Website
      </h2>
      <p className="w-80 pl-10 pt-3 text-lg text-justify font-serif">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard
      </p>
      <button
        type="button"
        className="bg-black text-white text-lg font-bold mt-10 ml-10 mb-96 w-32 h-10"
      >
        Home
      </button>
      <img
        className="absolute top-24 right-14 w-96 h-96 rounded"
        src="https://images.pexels.com/photos/20113976/pexels-photo-20113976/free-photo-of-a-woman-lighting-a-candle-standing-on-a-table-next-to-a-book-and-a-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Image"
      />
    </div>
  );
}
