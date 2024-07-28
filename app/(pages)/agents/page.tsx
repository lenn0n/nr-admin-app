'use client';
import { useEffect } from 'react'
import { useAxios } from "@hooks/all"
import useTable from '@/app/hooks/useTable';

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

  const getAgents = async (tablePayload: any) => {
    const response = await get({
      url: "/agent",
      payload: tablePayload,
      objectPayloadToURLParams: true,
      requiresAuth: true,
      authPrefix: 'Bearer'
    })

    if (response.result) {
      const tableData: any = []
      response.data.map((agent: any) => {

        const updatedAt =
          new Date(agent.updatedAt)
            .toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })

        tableData.push({
          rows: [
            { key: 'name', value: agent.agent_name },
            { key: 'date', value: updatedAt, className: 'mt-4' },
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
      { title: 'Name', className: 'text-start', colSpan: 1 },
      { title: 'Added Date', className: 'text-start', colSpan: 1 },
      { title: 'Actions', className: 'text-start', colSpan: 1 },
    ])

    setTablePayload({ search: 'highest' })
    setTableDataRetriever(getAgents)
  }, [])

  return (
    <div>
      <div className="bg-slate-500 bg-opacity-5 rounded-lg p-5">
        <RenderTable/>
      </div>
    </div>
  )
}

export default Page