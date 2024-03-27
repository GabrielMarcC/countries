import { CountryName } from "@/types";

type Props = {
  data: CountryName;
};

export const NativeNames = ({ data }: Props) => {
  const length = Object.keys(data.nativeName).length;

  return (
    <div>
      {length > 1 ? (
        Object.keys(data.nativeName)
          .splice(0, 1)
          .map((code) => {
            return (
              <div key={code}>
                <p>
                  <strong>Native Name: </strong> {data.nativeName[code].common}
                </p>
              </div>
            );
          })
      ) : (
        <div>
          {Object.keys(data.nativeName).map((code) => {
            return (
              <div key={code}>
                <p>
                  <strong>Native name: </strong> {data.nativeName[code].common}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
