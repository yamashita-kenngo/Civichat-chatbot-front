import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import HeadMeta from "../../organisms/HeadMeta";
import dayjs from "dayjs";

type Props = {
  service_id: string;
  name: string;
  overview: string | null;
  area: string | null;
  target: string | null;
  detailUrl: string | null;
  organization: string | null;
  acceptableDates: string | null;
  acceptableTimes: string | null;
  needs: string | null;
  qualification: string | null;
  applyUrl: string | null;
  lastUpdated: string | null;
  support_content: string | null;
  detail_url: string | null;
};

interface LiModel {
  isList: boolean;
  message: string;
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  try {
    // @ts-ignore
    const urlId = context.params.id;
    console.log(urlId);
    const res = await fetch(
      process.env.APIURL
        ? `${process.env.APIURL}/info/${urlId}`
        : `https://r3-gouu-api.civichat.dev/services/${urlId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const SystemFromId = await res.json();
    return {
      props: { ...SystemFromId, othersType: "制度" },
      revalidate: 86400,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

const unixToDateString = (unixDate: number) => {
  return dayjs.unix(unixDate).format("YYYY/MM/DD");
};

const needsTestList = (str: string): LiModel[] => {
  const strList = removeNewLineCode(str).startsWith("・")
    ? str.slice(1).split("・")
    : str.split("・");
  const returnList: LiModel[] = [];
  strList.forEach((str, index) => {
    if (strList.length === index + 1) {
      const last = str.split("※");
      if (last.length === 1) {
        last.forEach((str2) => {
          returnList.push({
            isList: true,
            message: removeNewLineCode(str2),
          });
        });
      } else {
        last.forEach((str2, index2) => {
          returnList.push({
            isList: index2 !== last.length - 1,
            message:
              index2 !== last.length - 1
                ? removeNewLineCode(str2)
                : "※" + removeNewLineCode(str2),
          });
        });
      }
    } else {
      str.split("≪").forEach((str2) => {
        const str3 = str2.split("≫")[0];
        returnList.push({
          isList: str3 === str2,
          message:
            str3 === str2
              ? removeNewLineCode(str3)
              : "≪" + removeNewLineCode(str3) + "»",
        });
      });
    }
  });
  return returnList;
};
const removeNewLineCode = (content: string | null): string => {
  if (content) {
    return content.replace(/\\n/g, "");
  }
  return "";
};

const counterList = (str: string): LiModel[] => {
  if (!str.startsWith("・")) {
    return str.split("・").map((value, index) => {
      return {
        isList: Boolean(index),
        message: value,
      };
    });
  }
  return str
    .slice(1)
    .split("・")
    .map((value) => {
      return {
        isList: true,
        message: value,
      };
    });
};

const SystemFromId: NextPage<Props> = (props) => {
  return (
    <div className="container px-5 mb-16 mt-10">
      <HeadMeta
        path={`info/${props.service_id}`}
        title={props.name}
        description={props.overview ? props.overview : ""}
        isTop={false}
      />

      <div className="container mx-auto">
        <img className="h-100" src="https://i.imgur.com/KU0CavH.png" />
      </div>
      {props.name ? (
        <h1 className="text-4xl font-bold">{props.name}</h1>
      ) : undefined}
      {props.overview ? <p className="mt-9">{props.overview}</p> : undefined}
      {
        <table className="py-2 border-collapse mt-4">
          <tr>
            <td className="text-gray-500 w-20 py-2">対象者</td>
            <td className="py-2">{props.target}</td>
          </tr>
          {props.support_content ? (
            <tr>
              <td className="text-gray-500 w-20 py-2">支援内容</td>
              <td className="py-2">{props.support_content}</td>
            </tr>
          ) : undefined}
        </table>
      }

      {props.needs ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">必要書類</h2>
          <ul className="my-5">
            {needsTestList(props.needs).map((need) => (
              <li
                key={need.message}
                className={need.isList ? "list-disc ml-5" : undefined}
              >
                {need.message}
              </li>
            ))}
          </ul>
        </div>
      ) : undefined}
      {/*props.endReleaseDate ? (
        <div>
          <h2 className="text-2xl font-bold">申請期限</h2>
          <p className="my-5">
            {props.endReleaseDate &&
            props.endReleaseDate !== '-' &&
            Number.isInteger(props.endReleaseDate)
              ? unixToDateString(props.endReleaseDate as number)
              : ''}
          </p>
        </div>
      ) : undefined}
      {props.counter && props.counter !== '-' ? (
        <div>
          <h2 className="text-2xl font-bold">申請窓口</h2>
          <ul className="my-5">
            {counterList(props.counter).map((counter) => (
              <li key={counter.message} className={counter.isList ? 'list-disc ml-5' : undefined}>
                {counter.message}
              </li>
            ))}
          </ul>
        </div>
      ) : undefined */}
      {(props.acceptableDates || props.acceptableTimes) &&
      (props.acceptableDates !== "-" || props.acceptableTimes !== "-") ? (
        <div>
          <h2 className="text-2xl font-bold">受付可能日時</h2>
          <p className="my-5">
            {props.acceptableDates} {props.acceptableTimes}
          </p>
        </div>
      ) : undefined}
      {/*props.contact && props.contact !== '-' ? (
        <div>
          <h2 className="text-2xl font-bold">お問い合わせ先</h2>
          <p className="my-5">{props.contact}</p>
        </div>
      ) : undefined */}
      {props.detail_url ? (
        <a href={props.detail_url}>
          <button className="container bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn-block">
            ホームページを見る
          </button>
        </a>
      ) : undefined}
    </div>
  );
};

export default SystemFromId;
