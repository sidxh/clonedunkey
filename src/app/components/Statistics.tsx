const Statistics = () => {
    return(
        <div className="mt-24 rounded-4xl sm:mt-32 lg:mt-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <div className="flex items-center gap-x-8" style={{ opacity: 1, transform: 'none' }}>
              <h2 className="mb-8 text-2xl font-semibold tracking-wider text-center text-black font-display sm:text-left">We serve</h2>
              <div className="flex-auto h-px"></div>
            </div>
            <div>
              <div>
                <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
                  <div className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-gray-950 after:bg-gray-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px" style={{ opacity: 1, transform: 'none' }}>
                    <dt className="mt-2 text-base text-gray-600">Workspaces</dt>
                    <dd className="text-3xl font-semibold font-display text-gray-950 sm:text-[32px]">1.3K</dd>
                  </div>
                  <div className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-gray-950 after:bg-gray-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px" style={{ opacity: 1, transform: 'none' }}>
                    <dt className="mt-2 text-base text-gray-600">APIs</dt>
                    <dd className="text-3xl font-semibold font-display text-gray-950 sm:text-[32px]">1K</dd>
                  </div>
                  <div className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-gray-950 after:bg-gray-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px" style={{ opacity: 1, transform: 'none' }}>
                    <dt className="mt-2 text-base text-gray-600">Keys</dt>
                    <dd className="text-3xl font-semibold font-display text-gray-950 sm:text-[32px]">18K</dd>
                  </div>
                  <div className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-gray-950 after:bg-gray-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px" style={{ opacity: 1, transform: 'none' }}>
                    <dt className="mt-2 text-base text-gray-600">Verifications</dt>
                    <dd className="text-3xl font-semibold font-display text-gray-950 sm:text-[32px]">13M</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Statistics;