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
  detail_url: string | null;
  organization: string | null;
  acceptableDates: string | null;
  acceptableTimes: string | null;
  needs: string | null;
  qualification: string | null;
  applyUrl: string | null;
  lastUpdated: string | null;
  image_url: string;
  postal_address: string | null;
  abstract: string | null;
  issue_type: string | null;
  support_content: string | null;
  administrative_service_category: string | null;
  type_nursery_school: string | null;
  target_age: string | null;
  location: string | null;
  closed_days: string | null;
  playground: string | null;
  ibservation: string | null;
  take_out_diapers: string | null;
  extended_hours_childcare: string | null;
  availability_of_childcare_facilities_for_0: string | null;
  availability_of_childcare_facilities_for_1: string | null;
  availability_of_childcare_facilities_for_2: string | null;
  availability_of_childcare_facilities_for_3: string | null;
  availability_of_childcare_facilities_for_4: string | null;
  availability_of_childcare_facilities_for_5: string | null;
  apply: string | null;
  contact: string | null;
  url: string | null;
  thisyear_admission_rate_for_0: string | null;
  thisyear_admission_rate_for_1: string | null;
  thisyear_admission_rate_for_2: string | null;
  thisyear_admission_rate_for_3: string | null;
  thisyear_admission_rate_for_4: string | null;
  thisyear_admission_rate_for_5: string | null;
  thisyear_admission_point_for_0: string | null;
  thisyear_admission_point_for_1: string | null;
  thisyear_admission_point_for_2: string | null;
  thisyear_admission_point_for_3: string | null;
  thisyear_admission_point_for_4: string | null;
  thisyear_admission_point_for_5: string | null;
  lastyear_admission_rate_for_0: string | null;
  lastyear_admission_rate_for_1: string | null;
  lastyear_admission_rate_for_2: string | null;
  lastyear_admission_rate_for_3: string | null;
  lastyear_admission_rate_for_4: string | null;
  lastyear_admission_rate_for_5: string | null;
  lastyear_admission_point_for_0: string | null;
  lastyear_admission_point_for_1: string | null;
  lastyear_admission_point_for_2: string | null;
  lastyear_admission_point_for_3: string | null;
  lastyear_admission_point_for_4: string | null;
  lastyear_admission_point_for_5: string | null;
  ibservation_detail: string | null;
  security: string | null;
  parking: string | null;
  baby_buggy: string | null;
  othersType: string | null;
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
    const seidoType = SystemFromId.service_id.split('-')[0];
    let othersType;
    if (seidoType === "shibuya_preschool") {
      othersType = "園への";
    } else if (
      seidoType === "shibuya_parenting" ||
      seidoType === "kumamoto_earthquake"
    ) {
      othersType = "";
    } else {
      othersType = "";
    }
    console.log(othersType)
    return {
      props: { ...SystemFromId, othersType: othersType },
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
    <div className="px-5 mt-10 items-center">
      <HeadMeta
        path={`info/${props.service_id}`}
        title={props.name}
        description={props.overview ? props.overview : ""}
        isTop={false}
      />
      <img
        style={{ flexBasis: "40%", width: "40%" }}
        className="mx-auto"
        src={props.image_url}
        alt="hero"
      />
      {props.name ? (
        <h1 className="text-4xl font-bold py-4 mt-4">{props.name}</h1>
      ) : undefined}
      <table className="py-2 border-collapse">
        {props.target !== undefined ? (
          <tr>
            <td className="text-gray-500 w-2/5 py-2">対象者</td>
            <td className=" ">{props.target}</td>
          </tr>
        ) : undefined}
        {props.abstract !== undefined ? (
          <tr>
            <td className="text-gray-500 w-35 py-2">概要</td>
            <td className="py-2">{props.abstract}</td>
          </tr>
        ) : undefined}
        {props.issue_type !== undefined ? (
          <tr>
            <td className="text-gray-500 w-35 py-2">カテゴリー</td>
            <td className="py-2">{props.issue_type}</td>
          </tr>
        ) : undefined}
        {props.support_content !== undefined ? (
          <tr>
            <td className="text-gray-500 w-35 py-2">支援内容</td>
            <td className="py-2">{props.support_content}</td>
          </tr>
        ) : undefined}
        {props.administrative_service_category !== undefined ? (
          <tr>
            <td className="text-gray-500 w-35 py-2">カテゴリー</td>
            <td className="py-2">{props.administrative_service_category}</td>
          </tr>
        ) : undefined}
        {props.type_nursery_school !== undefined ? (
          <tr>
            <td className="text-gray-500 w-2/5 py-2">施設のカテゴリ</td>
            <td className="py-2">{props.type_nursery_school}</td>
          </tr>
        ) : undefined}
        {props.target_age !== undefined ? (
          <tr>
            <td className="text-gray-500 w-35 py-2">対象年齢</td>
            <td className="py-2">{props.target_age}歳</td>
          </tr>
        ) : undefined}
        {props.location !== undefined ? (
          <tr>
            <td className="text-gray-500 w-35 py-2">住所</td>
            <td className="py-2">{props.location}</td>
          </tr>
        ) : undefined}
      </table>

      {props.overview ? <p className="mt-9">{props.overview}</p> : undefined}
      {/*
      <p className="mt-9 text-red-600 font-bold">このページは実証実験用のものです。</p>
      <table className="py-2 border-collapse">
        <tr>
          <td className="text-gray-500 w-20 py-2">対象者</td>
          <td className="py-2">{props.target}</td>
        </tr>
        {props.supportContent ? (
          <tr>
            <td className="text-gray-500 w-20 py-2">支援内容</td>
            <td className="py-2">{props.supportContent}</td>
          </tr>
        ) : undefined}
      </table>
      */}
      {props.needs ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">必要なもの</h2>
          <ul className="my-2 mb-5">
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

      {props.postal_address ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">申請窓口</h2>
          <p className="my-2 mb-5">{props.postal_address}</p>
        </div>
      ) : undefined}

      {props.closed_days ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">休園日</h2>
          <p className="my-2 mb-5">{props.closed_days}</p>
        </div>
      ) : undefined}
      {props.playground ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">園庭</h2>
          <p className="my-2 mb-5">{props.playground}</p>
        </div>
      ) : undefined}

      {props.ibservation ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">見学</h2>
          <p className="my-2 mb-5">{props.ibservation}</p>
          <p className="my-2 mb-5">{props.ibservation_detail}</p>
        </div>
      ) : undefined}

      {props.take_out_diapers ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">おむつの持ち帰り</h2>
          <p className="my-2 mb-5">{props.take_out_diapers}</p>
        </div>
      ) : undefined}

      {props.extended_hours_childcare ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">延長保育の対応時間</h2>
          <p className="my-2 mb-5">{props.extended_hours_childcare}</p>
        </div>
      ) : undefined}

      {props.security ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">施設のセキュリティ</h2>
          <p className="my-2 mb-5">{props.security}</p>
        </div>
      ) : undefined}

      {props.parking ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">駐車場</h2>
          <p className="my-2 mb-5">{props.parking}</p>
        </div>
      ) : undefined}

      {props.baby_buggy ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">バギー置き場</h2>
          <p className="my-2 mb-5">{props.baby_buggy}</p>
        </div>
      ) : undefined}

      {props.availability_of_childcare_facilities_for_0 ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold py-2">保育施設の空き状況</h2>
          <h4>令和3年10月1日入園分</h4>
          <table className="py-2 border-collapse">
            <tr>
              <td className="text-gray-500 w-40 py-2">0歳児</td>
              <td className="text-right">
                {props.availability_of_childcare_facilities_for_0}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500 w-40 py-2">1歳児</td>
              <td className="text-right">
                {props.availability_of_childcare_facilities_for_1}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500 w-40 py-2">2歳児</td>
              <td className="text-right">
                {props.availability_of_childcare_facilities_for_2}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500 w-40 py-2">3歳児</td>
              <td className="text-right">
                {props.availability_of_childcare_facilities_for_3}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500 w-40 py-2">4歳児</td>
              <td className="text-right">
                {props.availability_of_childcare_facilities_for_4}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500 w-40 py-2">5歳児</td>
              <td className="text-right">
                {props.availability_of_childcare_facilities_for_5}
              </td>
            </tr>
          </table>
        </div>
      ) : undefined}

      {props.thisyear_admission_rate_for_0 ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold py-2">前年度までの申込状況</h2>
          <h3>令和3年度(倍率/最下指数)</h3>
          <table className="py-2 border-collapse">
            <tr>
              <td className="text-gray-500 w-40 py-2">0歳児</td>
              <td className="text-right">
                {props.thisyear_admission_rate_for_0}/
                {props.thisyear_admission_point_for_0}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500  w-40 py-2">1歳児</td>
              <td className="text-right">
                {props.thisyear_admission_rate_for_1}/
                {props.thisyear_admission_point_for_1}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500  w-40 py-2">2歳児</td>
              <td className="text-right">
                {props.thisyear_admission_rate_for_2}/
                {props.thisyear_admission_point_for_2}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500  w-40 py-2">3歳児</td>
              <td className="text-right">
                {props.thisyear_admission_rate_for_3}/
                {props.thisyear_admission_point_for_3}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500  w-40 py-2">4歳児</td>
              <td className="text-right">
                {props.thisyear_admission_rate_for_4}/
                {props.thisyear_admission_point_for_4}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500  w-40 py-2">5歳児</td>
              <td className="text-right">
                {props.thisyear_admission_rate_for_5}/
                {props.thisyear_admission_point_for_5}
              </td>
            </tr>
          </table>
          <h3>令和2年度(倍率/最下指数)</h3>
          <table className="py-2 border-collapse">
            <tr>
              <td className="text-gray-500 w-40 py-2">0歳児</td>
              <td className="text-right">
                {props.lastyear_admission_rate_for_0}/
                {props.lastyear_admission_point_for_0}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500 w-40 py-2">1歳児</td>
              <td className="text-right">
                {props.lastyear_admission_rate_for_1}/
                {props.lastyear_admission_point_for_1}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500 w-40 py-2">2歳児</td>
              <td className="text-right">
                {props.lastyear_admission_rate_for_2}/
                {props.lastyear_admission_point_for_2}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500 w-40 py-2">3歳児</td>
              <td className="text-right">
                {props.lastyear_admission_rate_for_3}/
                {props.lastyear_admission_point_for_3}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500 w-40 py-2">4歳児</td>
              <td className="text-right">
                {props.lastyear_admission_rate_for_4}/
                {props.lastyear_admission_point_for_4}
              </td>
            </tr>
            <tr>
              <td className="text-gray-500 w-40 py-2">5歳児</td>
              <td className="text-right">
                {props.lastyear_admission_rate_for_5}/
                {props.lastyear_admission_point_for_5}
              </td>
            </tr>
          </table>
        </div>
      ) : undefined}

      {props.apply ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">申込受付先</h2>
          <p className="my-2 mb-5">{props.apply}</p>
        </div>
      ) : undefined}

      {props.contact ? (
        <div>
          <h2 className="mt-3 text-2xl font-bold">{props.othersType}お問い合わせ</h2>
          <a href={`tel:${props.contact}`}>
            <td className="py-2">{props.contact}</td>
          </a>
        </div>
      ) : undefined}

      {/*props.endReleaseDate ? (
        <div>
          <h2 className="text-2xl font-bold">申請期限</h2>
          <p className="my-2 mb-5">
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
          <ul className="my-2 mb-5">
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
          <p className="my-2 mb-5">
            {props.acceptableDates} {props.acceptableTimes}
          </p>
        </div>
      ) : undefined}
      {/*props.contact && props.contact !== '-' ? (
        <div>
          <h2 className="text-2xl font-bold">お問い合わせ先</h2>
          <p className="my-2 mb-5">{props.contact}</p>
        </div>
      ) : undefined */}
      <div className="flex flex-row pt-20">
        <div className="w-1/2 px-2">
          {props.detail_url ? (
            <a href={props.detail_url}>
              <button className="container bg-blue-500 font-semibold text-white py-2 px-4 border border-br-500 hover:border-transparent rounded btn-block pt-4 pb-4 mb-5 shadow">
                ホームページ
              </button>
            </a>
          ) : undefined}
        </div>
        <div className="w-1/2 px-2">
          {props.location ? (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${props.location}`}
            >
              <button className="container bg-green-500 font-semibold text-white py-2 px-4 border border-br-500 hover:border-transparent rounded btn-block pt-4 pb-4 mb-5 shadow">
                場所を確認
              </button>
            </a>
          ) : undefined}
        </div>
      </div>
      <p className="border-t-2 mt-4"></p>
      <div className="px-2 mb-5 pt-6">
        <h5 className="font-bold text-gray-500">記載しているデータについて</h5>
        <p className="text-gray-500 text-sm">
          株式会社Civichatが独自に収集したデータのほか、渋谷区議会神薗まちこ議員が独自調査の結果、公開しているデータを承諾の上、利用しています。
        </p>
        <a
          href="https://docs.google.com/spreadsheets/d/19jDzX0feJ8-SzVEn3VEwe5OF348dsnDU0zzss9CrlZ4"
          rel="noopener noreferrer"
        >
          <p className="text-gray-500 text-sm underline">
            渋谷区保育園2021_一覧表
          </p>
        </a>
      </div>
    </div>
  );
};
export default SystemFromId;
