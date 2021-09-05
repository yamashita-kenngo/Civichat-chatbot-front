import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import HeadMeta from "../../organisms/HeadMeta";
import Link from "next/link";

type System = {
  name: string;
  overview: string | null;
  detailUrl: string | null;
  administrativeServiceCategory: string | null;
  serviceId: string;
  service_id: string | null;
  support_content: string | null;
  target: string | null;
};

type Props = {
  resultId: string;
  result: System[];
  othersType: string;
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

const changeDetailContent = (content: string | null): string => {
  if (content) {
    return content.replace(/<br>/g, "\n");
  }
  return "";
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  // @ts-ignore
  const urlId = context.params.id;
  const res = await fetch(`${process.env.APIURL}/others?resultId=${urlId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const OtherFromId = await res.json();
  const seidoType = OtherFromId.result[0].name.split("-")[0];
  let othersType;
  if (seidoType === "shibuya_preschool") {
    othersType = "施設";
  } else if (
    seidoType === "shibuya_parenting" ||
    seidoType === "kumamoto_earthquake"
  ) {
    othersType = "制度";
  } else {
    othersType = "";
  }

  if (OtherFromId.result.length) {
    return {
      props: { ...OtherFromId, othersType: othersType },
      revalidate: 3600,
    };
  }
  return {
    notFound: true,
  };
};

const OthersFromId: NextPage<Props> = ({ result, resultId, othersType }) => {
  return (
    <div className="container items-center justify-center mx-auto px-2">
      <HeadMeta
        path={`others/${resultId}`}
        title={"Civichat - 結果一覧を見る"}
        description={"Civichat"}
        isTop={false}
      />
      <div>
        <div className="flex justify-center items-center">
          <div style={{ flexBasis: "70%" }} className="p-2">
            <p className="font-black">
              あなたにぴったりの{othersType}が合計{result.length}
              個見つかりました！
            </p>
          </div>
          <img
            style={{ flexBasis: "50%", width: "50%" }}
            className="h-full m-2"
            src="https://i.imgur.com/KU0CavH.png"
            width="981"
            height="757"
            alt="タイトル画像"
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl p-2 font-bold">
          {othersType !== '' ? `${othersType}一覧` : "一覧"}
        </h3>
        {result.map((system) => (
          <a className="">
            <div className="p-5">
              <h3 className="text-xl font-bold py-2">{system.name}</h3>
              <table className="py-2 border-collapse">
                <tr>
                  <td className="text-gray-500 w-100 py-2">対象者</td>
                  <td className="py-2 ">{system.target}</td>
                </tr>
                <tr>
                  <td className="text-gray-500 w-20 py-2">支援内容</td>
                  <td className="py-2">{system.support_content}</td>
                </tr>
              </table>
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/services/${system.service_id}`}
                key={system.service_id}
              >
                <button className="container hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded btn-block">
                  詳しく見る
                </button>
              </Link>
              <p className="border-t-2 mt-8"></p>
              {/*
              <table className="py-2 border-collapse">
                <tr>
                  <td className="text-gray-500 w-20 py-2"></td>
                  <td className="py-2">{system.target}</td>
                </tr>
                <tr>
                  <td className="text-gray-500 w-20 py-2">支援内容</td>
                  <td className="py-2">{system.supportContent}</td>
                </tr>
              </table>*/}
            </div>
          </a>
        ))}
      </div>
      {/*systems.slice(systems.length - 9, systems.length).length >= 1 ? (
        <div>
          <h3 className="text-xl p-2 font-bold">相談・窓口に関すること</h3>
          {systems.slice(systems.length - 9, systems.length).map((system) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              className="flex border-gray-300 rounded-2xl border my-2.5 justify-center items-center"
              key={system.id}
              onClick={() => {
                Router.push({ pathname: `/info/${system.id}` })
              }}
            >
              <img
                style={{ flexBasis: '33%', width: '33%' }}
                className="h-full m-2"
                src={system.imageUrl}
                width="981"
                height="757"
                alt="test"
              />
              <div style={{ flexBasis: '70%' }} className="p-2">
                <h3 className="text-xl font-bold py-2">{system.name}</h3>
                <h4 className="py-2">{system.overview}</h4>
                <table className="py-2 border-collapse">
                  <tr>
                    <td className="text-gray-500 w-20 py-2">対象者</td>
                    <td className="py-2">{system.target}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 w-20 py-2">支援内容</td>
                    <td className="py-2">{system.supportContent}</td>
                  </tr>
                </table>
              </div>
            </div>
          ))}
        </div>
      ) : undefined*/}
    </div>
  );
};

export default OthersFromId;
