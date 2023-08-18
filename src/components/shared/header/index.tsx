interface HeaderProp {
  name?: string;
}

const Header = ({ name }: HeaderProp) => {
  return (
    <div className="h-40 flex items-center justify-center bg-gradient-to-tr from-[#FBFEF1] to-[#E5FEEE]">
      <h1 className="text-3xl text-dark font-PoiretOne-Regular uppercase">
        {name}
      </h1>
    </div>
  );
};

export default Header;
