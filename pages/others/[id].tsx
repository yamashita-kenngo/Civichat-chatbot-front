import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import HeadMeta from "../../organisms/HeadMeta";
import UMLogo from "../../assets/umlogo.png";
import CivichatLogo from "../../assets/CivichatLogo.png";
import Image from "next/image";
import Link from "next/link";

type System = {
  title: string;
  overview: string | null;
  detailUrl: string | null;
  administrativeServiceCategory: string | null;
  serviceId: string;
};

type Props = {
  resultId: string;
  result: System[];
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
  console.log(res)

  const OtherFromId = await res.json();
  if (OtherFromId.result.length) {
    return {
      props: OtherFromId,
      revalidate: 3600,
    };
  }
  return {
    notFound: true,
  };
};

const OthersFromId: NextPage<Props> = ({ result, resultId }) => {
  return (
    <div className="container items-center justify-center mx-auto px-2">
      <HeadMeta
        path={`others/${resultId}`}
        title={"Civichat - 見つけた制度を見る"}
        description={"Civichat"}
        isTop={false}
      />
      <h1 className="text-2xl p-2">利用可能な制度</h1>
      <h2 className="text-center text-xl py-5">
        利用可能な制度が{result.length}件見つかりました。
      </h2>
      <div>
        <h3 className="text-xl p-2 font-bold">
          {result.length
            ? result[0].administrativeServiceCategory
            : "その他のこと"}
        </h3>
        {result.map((system) => (
          <Link href={`${system.detailUrl}`} key={system.serviceId}>
            <a className="flex border-gray-300 rounded-2xl border my-2.5">
              {/*
            <img
              style={{ flexBasis: '33%', width: '33%' }}
              className="h-full m-2"
              src={system.imageUrl}
              width="981"
              height="757"
              alt="test"
            />*/}
              <div className="p-2">
                <h3 className="text-xl font-bold py-2">{system.title}</h3>
                <h4 className="py-2">{changeDetailContent(system.overview)}</h4>
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
          </Link>
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

      <p className="border-t-2 mt-6">
        The data provided by the International Universal Menu Association in
        this service is used under CC-BY license.
      </p>
      <p>
        本サービスは、ユニバーサルメニュー準拠のもと、一般財団法人ユニバーサルメニュー普及協会が提供するデータをCC-BYライセンスで使用しています。
      </p>
      <p className="flex h-10">
        <a
          href="https://civichat.jp/"
          rel="noreferrer noopener"
          target={"_blank"}
          className="px-2"
        >
          <Image
            src={CivichatLogo}
            alt="Civichat Logo"
            width={"120px"}
            height={"120px"}
          />
        </a>
        <a
          href="https://universalmenu.org/"
          rel="noreferrer noopener"
          target={"_blank"}
          className="px-2"
        >
          <Image src={UMLogo} alt="UM Logo" width={"120px"} height={"120px"} />
        </a>
      </p>
    </div>
  );
};

export default OthersFromId;
