const ImgGrid = () => {
  // getting food images
  const foodImgs = [
    "https://pixabay.com/get/g0a4c59277e2f77dadecaa20fe64ac72c3ee988c92a827a009d6a27a1d72e3ca99ffc731029196d8bd023fcbc1076e72a_640.jpg",
    "https://pixabay.com/get/g44608ca9438b62df5f40e9ad681c5fd307be6074efb0c8f019be5dbeb6c7d8e0285d8aac9f7ce356bbd36cba4a1772aa_640.jpg",
    "https://pixabay.com/get/g0fff7248a7eb5fd8ae770202f2312320b7507c172d93e822f37c7ed9b9cb157cfcdc4e332374d351241e5b393634227d_640.jpg",
    "https://pixabay.com/get/ge8d6d09907db0ddc5063c135d28098f3dabd9dbab7154708b90651492b4cb5d6dddbd7c9562151a540b2d0d62624c7b5_640.jpg",
    "https://pixabay.com/get/ga0aaa8e63ce41d8cb3f629f889a38079e679971fe92914a9b83d2d29a814a8b7101eacc78c5b01ecb6eea5244fc29cc0_640.jpg",
    "https://pixabay.com/get/ge754e45be9e58061df00ea45a1760aad0158817e05d34e810ad9955b56553cb8bae10cb1c8174c28470bd36497e820ad_640.jpg",
    "https://pixabay.com/get/gb443a38fe2c0b8e2c6cc8af967c72374463929eaea58aa89796666d837002c660992194408fb1017d97800c8d510b5ab_640.jpg",
    "https://pixabay.com/get/g59560ec5c43f95cda26ad0cf5f21d01bbcdae52d4c0294007ed7cbfc8ad6be7c29e50f18052275eac68a9c902ac0e0f7_640.jpg",
    "https://pixabay.com/get/g9bec9d3600798d2bbe6b2f1e9219ed741c151f94cbb0350c663673fae4f8f7a9cc34ed961861b42f9e4015088e5af5f5_640.jpg",
  ];

  return (
    <section className="overflow-hidden ">
      <div className="container px-5 py-2 mx-auto lg:py-2 lg:px-5">
        <div className="flex flex-wrap -m-1 md:-m-2">
          {foodImgs.map((item, index) => (
            <div className="flex flex-wrap w-1/3" key={index}>
              <div className="p-1 md:p-1">
                <img
                  className="block object-cover object-center w-full h-full rounded-lg"
                  alt="food gallery"
                  src={item}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImgGrid;
