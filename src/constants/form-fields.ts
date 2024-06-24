import { InputsField } from '@/types'

export const INFO_OPTIONS = {
  gender: [
    {
      key: 'Male',
      value: 'Male'
    },
    {
      key: 'Female',
      value: 'Female'
    }
  ],
  area: [
    { key: 'Hà Nội', value: 'Hà Nội' },
    { key: 'Hồ Chí Minh', value: 'Hồ Chí Minh' },
    { key: 'Đà Nẵng', value: 'Đà Nẵng' },
    { key: 'Hải Phòng', value: 'Hải Phòng' },
    { key: 'Bình Dương', value: 'Bình Dương' },
    { key: 'Hải Dương', value: 'Hải Dương' },
    { key: 'Huế', value: 'Huế' },
    { key: 'Nghệ An', value: 'Nghệ An' }
  ],
  school: [
    { key: 'Đại học FPT HCM', value: 'Đại học FPT HCM' },
    { key: 'Đại học FPT Cần Thơ', value: 'Đại học FPT Cần Thơ' },
    { key: 'Đại học RMIT', value: 'Đại học RMIT' },
    { key: 'Đại học Công nghệ HCM', value: 'Đại học Công nghệ HCM' },
    { key: 'Đại học Văn Lang', value: 'Đại học Văn Lang' }
  ],
  major: [
    {
      key: 'Information Technology',
      value: 'Information Technology'
    },
    {
      key: 'Business Administration',
      value: 'Business Administration'
    },
    {
      key: 'Human Resource',
      value: 'Human Resource'
    },
    {
      key: 'Marketing',
      value: 'Marketing'
    },
    {
      key: 'Accounting',
      value: 'Accounting'
    }
  ],
  attendingStatus: [
    { key: 'inclass', value: 'INCLASS' },
    { key: 'dropout', value: 'DROPOUT' },
    { key: 'finished', value: 'FINISHED' }
  ],
  certificationStatus: [
    {
      key: 'done',
      value: 'Done'
    },
    {
      key: 'notyet',
      value: 'Not yet'
    }
  ]
}

export const GENERAL_STUDENT_INFO_SYSTEM: InputsField = {
  view: [
    {
      key: 'id',
      label: 'ID',
      type: 'text'
    },
    {
      key: 'email',
      label: 'Email',
      type: 'text'
    },
    {
      key: 'fullName',
      label: 'Fullname',
      type: 'text'
    },
    {
      key: 'phone',
      label: 'Phone',
      type: 'text'
    },
    {
      key: 'status',
      label: 'Status',
      type: 'badge'
    },
    {
      key: 'dob',
      label: 'Date of birth',
      type: 'text'
    },
    {
      key: 'gender',
      label: 'Gender',
      type: 'text'
    },
    {
      key: 'address',
      label: 'Address',
      type: 'text'
    },
    {
      key: 'area',
      label: 'Area',
      type: 'text'
    }
  ],
  edit: [
    {
      key: 'id',
      label: 'ID',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'email',
      label: 'Email',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'fullName',
      label: 'Fullname',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'phone',
      label: 'Phone',
      type: 'input',
      isAllowEdit: true
    },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      isAllowEdit: false
    },
    {
      key: 'dob',
      label: 'Date of birth',
      type: 'date',
      isAllowEdit: true
    },
    {
      key: 'gender',
      label: 'Gender',
      type: 'select',
      isAllowEdit: true,
      options: INFO_OPTIONS.gender
    },
    {
      key: 'address',
      label: 'Address',
      type: 'input',
      isAllowEdit: true
    },
    {
      key: 'area',
      label: 'Area',
      type: 'select',
      isAllowEdit: true,
      options: INFO_OPTIONS.area
    }
  ]
}

export const GENERAL_STUDENT_INFO_CLASS: InputsField = {
  view: [
    {
      key: 'id',
      label: 'ID',
      type: 'text'
    },
    {
      key: 'email',
      label: 'Email',
      type: 'text'
    },
    {
      key: 'fullName',
      label: 'Fullname',
      type: 'text'
    },
    {
      key: 'phone',
      label: 'Phone',
      type: 'text'
    },
    {
      key: 'attendingStatus',
      label: 'Attending status',
      type: 'badge'
    },
    {
      key: 'dob',
      label: 'Date of birth',
      type: 'text'
    },
    {
      key: 'gender',
      label: 'Gender',
      type: 'text'
    },
    {
      key: 'area',
      label: 'Area',
      type: 'text'
    },
    {
      key: 'address',
      label: 'Address',
      type: 'text'
    },
    {
      key: 'result',
      label: 'Result',
      type: 'badge'
    }
  ],
  viewCertification: [
    {
      key: 'id',
      label: 'ID',
      type: 'text'
    },
    {
      key: 'email',
      label: 'Email',
      type: 'text'
    },
    {
      key: 'fullName',
      label: 'Fullname',
      type: 'text'
    },
    {
      key: 'phone',
      label: 'Phone',
      type: 'text'
    },
    {
      key: 'attendingStatus',
      label: 'Attending status',
      type: 'badge'
    },
    {
      key: 'dob',
      label: 'Date of birth',
      type: 'text'
    },
    {
      key: 'gender',
      label: 'Gender',
      type: 'text'
    },
    {
      key: 'area',
      label: 'Area',
      type: 'text'
    },
    {
      key: 'certificationStatus',
      label: 'Certification status',
      type: 'badge'
    },
    {
      key: 'address',
      label: 'Address',
      type: 'text'
    },
    {
      key: 'certificationDate',
      label: 'Certification date',
      type: 'text'
    }
  ],
  edit: [
    {
      key: 'id',
      label: 'ID',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'email',
      label: 'Email',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'fullName',
      label: 'Fullname',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'phone',
      label: 'Phone',
      type: 'input',
      isAllowEdit: true
    },
    {
      key: 'attendingStatus',
      label: 'Attending status',
      type: 'select',
      isAllowEdit: true,
      options: INFO_OPTIONS.attendingStatus
    },
    {
      key: 'dob',
      label: 'Date of birth',
      type: 'date',
      isAllowEdit: true
    },
    {
      key: 'gender',
      label: 'Gender',
      type: 'select',
      isAllowEdit: true,
      options: INFO_OPTIONS.gender
    },
    {
      key: 'area',
      label: 'Area',
      type: 'select',
      isAllowEdit: true,
      options: INFO_OPTIONS.area
    },
    {
      key: 'address',
      label: 'Address',
      type: 'input',
      isAllowEdit: true
    }
  ],
  editStatus: [
    {
      key: 'id',
      label: 'ID',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'email',
      label: 'Email',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'fullName',
      label: 'Fullname',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'phone',
      label: 'Phone',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'attendingStatus',
      label: 'Attending status',
      type: 'select',
      isAllowEdit: true,
      options: INFO_OPTIONS.attendingStatus
    },
    {
      key: 'dob',
      label: 'Date of birth',
      type: 'date',
      isAllowEdit: false
    },
    {
      key: 'gender',
      label: 'Gender',
      type: 'select',
      isAllowEdit: false,
      options: INFO_OPTIONS.gender
    },
    {
      key: 'area',
      label: 'Area',
      type: 'select',
      isAllowEdit: false,
      options: INFO_OPTIONS.area
    },
    {
      key: 'address',
      label: 'Address',
      type: 'input',
      isAllowEdit: false
    }
  ],
  editCertification: [
    {
      key: 'id',
      label: 'ID',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'email',
      label: 'Email',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'fullName',
      label: 'Fullname',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'phone',
      label: 'Phone',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'attendingStatus',
      label: 'Attending status',
      type: 'select',
      isAllowEdit: false,
      options: INFO_OPTIONS.attendingStatus
    },
    {
      key: 'dob',
      label: 'Date of birth',
      type: 'date',
      isAllowEdit: false
    },
    {
      key: 'gender',
      label: 'Gender',
      type: 'select',
      isAllowEdit: false,
      options: INFO_OPTIONS.gender
    },
    {
      key: 'area',
      label: 'Area',
      type: 'select',
      isAllowEdit: false,
      options: INFO_OPTIONS.area
    },
    {
      key: 'certificationStatus',
      label: 'Certification status',
      type: 'select',
      isAllowEdit: true,
      options: INFO_OPTIONS.certificationStatus
    },
    {
      key: 'address',
      label: 'Address',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'certificationDate',
      label: 'Certification date',
      type: 'date',
      isAllowEdit: true
    }
  ]
}

export const OTHERS_STUDENT_INFO: InputsField = {
  view: [
    {
      key: 'school',
      label: 'School',
      type: 'text'
    },
    {
      key: 'major',
      label: 'Major',
      type: 'text'
    },
    {
      key: 'yearOfGraduation',
      label: 'Year of graduation',
      type: 'text'
    },
    {
      key: 'gpa',
      label: 'GPA',
      type: 'text'
    },
    {
      key: 'recer',
      label: 'Recer',
      type: 'text'
    }
  ],
  edit: [
    {
      key: 'school',
      label: 'School',
      type: 'select',
      isAllowEdit: true,
      options: INFO_OPTIONS.school
    },
    {
      key: 'major',
      label: 'Major',
      type: 'select',
      isAllowEdit: true,
      options: INFO_OPTIONS.major
    },
    {
      key: 'yearOfGraduation',
      label: 'Year of graduation',
      type: 'date',
      isAllowEdit: true
    },
    {
      key: 'gpa',
      label: 'GPA',
      type: 'input',
      isAllowEdit: true
    },
    {
      key: 'recer',
      label: 'Recer',
      type: 'input',
      isAllowEdit: true
    }
  ],
  editStatus: [
    {
      key: 'school',
      label: 'School',
      type: 'select',
      isAllowEdit: false,
      options: INFO_OPTIONS.school
    },
    {
      key: 'major',
      label: 'Major',
      type: 'select',
      isAllowEdit: false,
      options: INFO_OPTIONS.major
    },
    {
      key: 'yearOfGraduation',
      label: 'Year of graduation',
      type: 'date',
      isAllowEdit: false
    },
    {
      key: 'gpa',
      label: 'GPA',
      type: 'input',
      isAllowEdit: false
    },
    {
      key: 'recer',
      label: 'Recer',
      type: 'input',
      isAllowEdit: false
    }
  ]
}

export const ADD_PRODUCT: InputsField = {
  add: [
    {
      key: 'name',
      label: 'Name',
      type: 'input',
      isAllowEdit: true
    },
    {
      key: 'description',
      label: 'Description',
      type: 'input',
      isAllowEdit: true
    },
    {
      key: 'price',
      label: 'Price',
      type: 'input',
      isAllowEdit: true
    },
    {
      key: 'brand',
      label: 'Brand',
      type: 'select',
      isAllowEdit: true
    },
    {
      key: 'image',
      label: 'Image',
      type: 'input',
      isAllowEdit: true
    }
  ]
}

export const ADD_BRAND: InputsField = {
  add: [
    {
      key: 'brandName',
      label: 'Brand name',
      type: 'input',
      isAllowEdit: true
    }
  ]
}

export const EDIT_BRAND: InputsField = {
  edit: [
    {
      key: 'brandName',
      label: 'Brand name',
      type: 'input',
      isAllowEdit: true
    }
  ]
}

export const EDIT_PRODUCT: InputsField = {
  edit: [
    {
      key: 'name',
      label: 'Name',
      type: 'input',
      isAllowEdit: true
    },
    {
      key: 'description',
      label: 'Description',
      type: 'input',
      isAllowEdit: true
    },
    {
      key: 'price',
      label: 'Price',
      type: 'input',
      isAllowEdit: true
    },
    {
      key: 'brand',
      label: 'Brand',
      type: 'select',
      isAllowEdit: true
    },
    {
      key: 'image',
      label: 'Image',
      type: 'input',
      isAllowEdit: true
    }
  ]
}
