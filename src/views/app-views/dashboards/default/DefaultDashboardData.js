export const FilterDetails = [
	{
		label: "Last 7 days",
		value: 7
	},	
	{
		label: "Last 10 days",
		value: 10
	},
	{
		label: "Last 30 days",
		value: 30
	},
]

const pipelines_by_count = [
	{
		date:"2023-01-02", 
		count: 190,
	},
	{
		date:"2023-01-03", 
		count: 290,
	},
	{
		date:"2023-01-04", 
		count: 100,
	},
	{
		date:"2023-01-05", 
		count: 90,
	},
	{
		date:"2023-01-06", 
		count: 130,
	},
	{
		date:"2023-01-07", 
		count: 150,
	},
	{
		date:"2023-01-07", 
		count: 150,
	}
]
const pipelines_by_size = [
	{
		date:"2023-01-02", 
		size: 200,
	},
	{
		date:"2023-01-03", 
		size: 300,
	},
	{
		date:"2023-01-04", 
		size: 100,
	},
	{
		date:"2023-01-05", 
		size: 100,
	},
	{
		date:"2023-01-06", 
		size: 1000,
	},
	{
		date:"2023-01-07", 
		size: 900,
	},
	{
		date:"2023-01-07", 
		size: 500,
	}
]

export const MockApiData = {
	success_percent: (100/190)*160,
	total_count: 190,
	total_size: 1500,
	pipelines_by_size: pipelines_by_size,
	pipelines_by_count: pipelines_by_count,
}