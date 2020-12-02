import config from '@/server/config'

import { set, connect } from 'mongoose'
import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose'

set('useCreateIndex', true)
connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

export { Account, IAccount, DAccount } from './account'
export { Applyment, IApplyment, DApplyment } from './applyment'
export { Job, IJob, DJob } from './job'
export { Tag, ITag, DTag } from './tag'
