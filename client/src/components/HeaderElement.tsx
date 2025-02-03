const HeaderElement = ({
  header,
  action,
}: {
  header: string;
  action: JSX.Element;
}) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">{header}</h1>
      {action}
    </div>
  );
};

export default HeaderElement;
