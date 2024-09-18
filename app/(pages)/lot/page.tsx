'use client';
import { useEffect } from 'react'
import { useAxios } from "@hooks/all"
import useTable from '@hooks/useTable';
import { formatRawNumber } from "@utils/validator"
const Page = () => {
  const { get } = useAxios()
  const {
    setTableHeader,
    setTableData,
    setTablePagination,
    setTablePayload,
    setTableDataRetriever,
    RenderTable
  } = useTable({
    showPagination: true,
    placeholderCount: 4
  })

  const getLotInfo = async (tablePayload: any) => {
    const response = await get({
      url: "/lot",
      payload: tablePayload,
      objectPayloadToURLParams: true,
      requiresAuth: true,
      authPrefix: 'Bearer'
    })

    if (response.result) {
      const tableData: any = []
      response.data.map((lot: any) => {
        tableData.push({
          rows: [
            { key: 'project_name', value: lot.project_name },
            { key: 'category', value: lot.category },
            { key: 'area', value: lot.area },
            { key: 'sqm', value: lot.sqm },
            { key: 'price_per_sqm', value: formatRawNumber(lot.price_per_sqm, 0, "₱") },
            { key: 'net_tcp', value: formatRawNumber(lot.net_tcp, 0, "₱") },
            { key: 'collectibles', value: formatRawNumber(lot.collectibles, 0, "₱") },
            { key: 'receivables', value: formatRawNumber(lot.receivables, 0, "₱") },
            {
              key: 'actions',
              jsx: <div className='flex gap-2'>
                <div className='text-blue-700 font-bold'>Update</div>
              </div>
            }
          ]
        })
      })

      setTableData(tableData)
      setTablePagination({
        max: 1,
        display: 5,
      })
    }
  }

  useEffect(() => {
    setTableHeader([
      { title: 'Project', className: 'text-start', colSpan: 1 },
      { title: 'Category', className: 'text-start', colSpan: 1 },
      { title: 'Area', className: 'text-start', colSpan: 1 },
      { title: 'SQM', className: 'text-start', colSpan: 1 },
      { title: 'Price', className: 'text-start', colSpan: 1 },
      { title: 'Net TCP', className: 'text-start', colSpan: 1 },
      { title: 'Collectibles', className: 'text-start', colSpan: 1 },
      { title: 'Receivables', className: 'text-start', colSpan: 1 },
      { title: 'Actions', className: 'text-start', colSpan: 1 },
    ])

    setTablePayload({ search: 'highest' })
    setTableDataRetriever(getLotInfo)
  }, [])

  return (
    <div>
      <div className="bg-slate-500 bg-opacity-5 rounded-lg p-5">
        <RenderTable />
      </div>
    </div>
  )
}

export default Page