import Button from './button.component';

const Navbar = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-100 bg-linear-to-b from-tertiary/80 to-tertiary/20 md:left-20 xl:bg-none">
      <div className="flex justify-between px-4 py-4 md:px-6">
        <div>
          <div className="bg-primary text-textured-[url(/images/nice-snow.png)] font-title text-4xl tracking-wide drop-shadow-md md:text-5xl">
            Nice Cream
          </div>
          <p className="text-xs font-medium text-secondary md:text-sm md:tracking-[0.075em]">
            Your #1 Gluten-Free Ice Cream
          </p>
        </div>
        <Button type="link" href="/">
          Buy Now!
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
