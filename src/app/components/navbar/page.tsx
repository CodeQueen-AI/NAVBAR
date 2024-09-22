import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black h-12">
      <div className="text-yellow-400 flex justify-between items-center">
        <h1 className="text-xl m-2 cursor-pointer">Navbar</h1>
        <ul className="flex gap-4 mr-4 cursor-pointer">
          <a className="hover:text-white" href="">Home</a>
          <a className="hover:text-white" href="">About</a>
          <a className="hover:text-white" href="">Contact</a>
        </ul>
      </div>
      <div>
        <p className="text-pink-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem
          magni exercitationem delectus eius reprehenderit, laborum facere alias
          a doloribus ciciatis, eum aliquam! Possimus cum provident temporibus
          dolorum tempora quidem esse, ratione nesciunt nihil Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Qui facere eligendi, aliquam
          sit dicta adipisci similique sint maiores consectetur magnam.
          Provident minus maxime eum modi consequatur? Nobis sint earum dicta.
          Earum, velit animi. Sequi, omnis nemo dolores maiores aperiam impedit
          nulla quisquam ex, earum inventore molestiae eos saepe sapiente
          nostrum error quasi suscipit aspernatur assumenda tempora itaque
          architecto minus magnam. Labore eligendi qui dolores recusandae eius
          enim quam vel sequi nobis, ab, fuga quidem. Minima, incidunt quis.
          Nulla iure repellendus minima cumque! Nihil sint ullam perspiciatis
          nisi consequatur rerum obcaecati? ea eveniet recusandae optio?
        </p>
      </div>
    </div>
  );
};
export default Navbar;
