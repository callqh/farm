import useLocale from '@/utils/useLocale'
import { Card, Spin, Typography } from '@arco-design/web-react'
import axios from 'axios'
import { DonutChart } from 'bizcharts'
import React, { useEffect, useState } from 'react'
import locale from './locale'

function PopularContent() {
  const t = useLocale(locale)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    let isMounted = true;
    setLoading(true)
    axios
      .get('/api/workplace/content-percentage')
      .then((res) => {
        if (isMounted) {
          setData(res.data)
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false)
        }
      })
      return () => {
        isMounted = false; 
      };
  }

  useEffect(() => {
    const cleanup = fetchData(); 
    return cleanup; 
  }, [])

  return (
    <Card>
      <Typography.Title heading={6}>
        {t['workplace.contentPercentage']}
      </Typography.Title>
      <Spin loading={loading} style={{ display: 'block' }}>
        <DonutChart
          autoFit
          height={340}
          data={data}
          radius={0.7}
          innerRadius={0.65}
          angleField="count"
          colorField="type"
          color={['#21CCFF', '#313CA9', '#249EFF']}
          interactions={[
            {
              type: 'element-single-selected',
            },
          ]}
          tooltip={{ showMarkers: false }}
          label={{
            visible: true,
            type: 'spider',
            formatter: (v) => `${(v.percent * 100).toFixed(0)}%`,
            style: {
              fill: '#86909C',
              fontSize: 14,
            },
          }}
          legend={{
            position: 'bottom',
          }}
          statistic={{
            title: {
              style: {
                fontSize: '14px',
                lineHeight: 2,
                color: 'rgb(--var(color-text-1))',
              },
              formatter: () => '内容量',
            },
            content: {
              style: {
                fontSize: '16px',
                color: 'rgb(--var(color-text-1))',
              },
              formatter: (_, data) => {
                const sum = data.reduce((a, b) => a + b.count, 0)
                return Number(sum).toLocaleString()
              },
            },
          }}
        />
      </Spin>
    </Card>
  )
}

export default PopularContent
