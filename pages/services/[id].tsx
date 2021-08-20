import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import HeadMeta from '../../organisms/HeadMeta'
import dayjs from 'dayjs'

type Props = {
  serviceId: string,
  title: string,
  overview: string | null,
  area: string | null,
  target: string | null,
  detailUrl: string | null,
  organization: string | null,
  acceptableDates: string | null,
  acceptableTimes: string | null,
  needs: string | null,
  qualification: string | null,
  applyUrl: string | null,
  lastUpdated: string | null
}

interface LiModel {
  isList: boolean
  message: string
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  try {
    // @ts-ignore
    const urlId = context.params.id
    const res = await fetch(
      process.env.APIURL
        ? `${process.env.APIURL}/services/${urlId}`
        : `https://r3-gouu-api.civichat.dev/services/${urlId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const SystemFromId = await res.json()
    return {
      props: SystemFromId,
      revalidate: 86400,
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}

const unixToDateString = (unixDate: number) => {
  return dayjs.unix(unixDate).format('YYYY/MM/DD')
}

const needsTestList = (str: string): LiModel[] => {
  const strList = removeNewLineCode(str).startsWith('・') ? str.slice(1).split('・') : str.split('・')
  const returnList: LiModel[] = []
  strList.forEach((str, index) => {
    if (strList.length === index + 1) {
      const last = str.split('※')
      if (last.length === 1) {
        last.forEach((str2) => {
          returnList.push({
            isList: true,
            message: removeNewLineCode(str2),
          })
        })
      } else {
        last.forEach((str2, index2) => {
          returnList.push({
            isList: index2 !== last.length - 1,
            message: index2 !== last.length - 1 ? removeNewLineCode(str2) : '※' + removeNewLineCode(str2),
          })
        })
      }
    } else {
      str.split('≪').forEach((str2) => {
        const str3 = str2.split('≫')[0]
        returnList.push({
          isList: str3 === str2,
          message: str3 === str2 ? removeNewLineCode(str3) : '≪' + removeNewLineCode(str3) + '»',
        })
      })
    }
  })
  return returnList
}
const removeNewLineCode = (content: string | null): string => {
  if (content) {
    return content.replace(/\\n/g,"");
  }
  return ""
}

const counterList = (str: string): LiModel[] => {
  if (!str.startsWith('・')) {
    return str.split('・').map((value, index) => {
      return {
        isList: Boolean(index),
        message: value,
      }
    })
  }
  return str
    .slice(1)
    .split('・')
    .map((value) => {
      return {
        isList: true,
        message: value,
      }
    })
}

const SystemFromId: NextPage<Props> = (props) => {
  return (
    <div className="container px-5 mb-16 mt-10">
      <HeadMeta
        path={`info/${props.serviceId}`}
        title={props.title}
        description={props.overview ? props.overview : ""}
        isTop={false}
      />
      {/*
          <img className="w-full" src={props.imageUrl} width="100vw" height="100%" alt="hero" />
      */}
      {props.title ? <h1 className="text-4xl font-bold">{props.title}</h1> : undefined}
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
          <ul className="my-5">
            {needsTestList(props.needs).map((need) => (
              <li key={need.message} className={need.isList ? 'list-disc ml-5' : undefined}>
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
      (props.acceptableDates !== '-' || props.acceptableTimes !== '-') ? (
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
      {props.detailUrl ? (
        <a
          style={{
            position: 'fixed',
            bottom: 0,
            lineHeight: '2.5rem',
            margin: '10px 10px 15px 10px',
            width: 'auto',
            left: 0,
            right: 0,
            height: '2.5rem',
            fontSize: '1.2rem',
            background: '#5dc65e',
            color: '#fff',
            borderRadius: '4px',
            textAlign: 'center',
          }}
          href={props.detailUrl}
        >
          公式ページへ
        </a>
      ) : undefined}
    </div>
  )
}

export default SystemFromId
