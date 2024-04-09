// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Personal rules (@saitonakamura)',
        rules: (function () {
          return ['left', 'right'].map(function (side) {
            // return {
            //   description: 'Double tap and hold ' + side + '_shift to make it ' + side + '_option + ' + side + '_control',
            //   manipulators: [
            //     {
            //       type: 'basic',
            //       conditions: [{ type: 'variable_if', name: side + '_shift pressed', value: 1 }],
            //       from: { key_code: side + '_shift' },
            //       to: [{ key_code: side + '_alt', modifiers: [side + '_control'] }],
            //     },
            //     {
            //       type: 'basic',
            //       conditions: [
            //         {
            //           input_sources: [{ language: 'ru' }],
            //           type: 'input_source_unless'
            //         }
            //       ],
            //       from: { key_code: side + '_shift' },
            //       to: [
            //         { set_variable: { name: side + '_shift pressed', value: 1 } },
            //         { key_code: side + '_shift' },
            //       ],
            //       to_delayed_action: {
            //         to_if_invoked: [{ set_variable: { name: side + '_shift pressed', value: 0 } }],
            //         to_if_canceled: [{ set_variable: { name: side + '_shift pressed', value: 0 } }],
            //       },
            //     },
            //   ],
            // }
          })
        })()
          .concat([
            {
              description: 'Double shift = symbols layer',
              manipulators: (function () {
                var leftMappings = [
                  ['q', { key_code: '1', modifiers: ['right_shift'] }],
                  ['w', { key_code: '2', modifiers: ['right_shift'] }],
                  ['e', { key_code: '3', modifiers: ['right_shift'] }],
                  ['r', { key_code: '4', modifiers: ['right_shift'] }],
                  ['t', { key_code: '5', modifiers: ['right_shift'] }],
                  ['t', { key_code: '5', modifiers: ['right_shift'] }],
                  ['a', { key_code: 'grave_accent_and_tilde' }],
                  ['z', { key_code: 'grave_accent_and_tilde', modifiers: ['right_shift'] }],
                  ['s', { key_code: 'hyphen' }],
                  ['x', { key_code: 'hyphen', modifiers: ['right_shift'] }],
                  ['d', { key_code: 'equal_sign' }],
                  ['c', { key_code: 'equal_sign', modifiers: ['right_shift'] }],
                  ['f', { key_code: 'backslash' }],
                  ['v', { key_code: 'backslash', modifiers: ['right_shift'] }],
                ]
                var rightMappings = [
                  ['y', { key_code: '6', modifiers: ['left_shift'] }],
                  ['u', { key_code: '7', modifiers: ['left_shift'] }],
                  ['i', { key_code: '8', modifiers: ['left_shift'] }],
                  ['o', { key_code: '9', modifiers: ['left_shift'] }],
                  ['p', { key_code: '0', modifiers: ['left_shift'] }],
                  ['h', { key_code: 'open_bracket', modifiers: ['left_shift'] }],
                  ['j', { key_code: 'close_bracket', modifiers: ['left_shift'] }],
                  ['k', { key_code: 'open_bracket' }],
                  ['l', { key_code: 'close_bracket' }],
                  ['semicolon', { key_code: 'quote' }],
                  ['slash', { key_code: 'quote', modifiers: ['left_shift'] }],
                ]
                var manipulators = []
                for (var i = 0; i < rightMappings.length; i++) {
                  var fromKeyCode = rightMappings[i][0]
                  var toKey = rightMappings[i][1]
                  manipulators.push({
                    type: 'basic',
                    from: { key_code: fromKeyCode, modifiers: { optional: ['any'] } },
                    conditions: [{ type: 'variable_if', name: 'right symbols layer', value: 1 }],
                    to: [toKey],
                  })
                }
                for (var i = 0; i < leftMappings.length; i++) {
                  var fromKeyCode = leftMappings[i][0]
                  var toKey = leftMappings[i][1]
                  manipulators.push({
                    type: 'basic',
                    from: { key_code: fromKeyCode, modifiers: { optional: ['any'] } },
                    conditions: [{ type: 'variable_if', name: 'left symbols layer', value: 1 }],
                    to: [toKey],
                  })
                }
                return manipulators
              })().concat([
                {
                  type: 'basic',
                  from: { key_code: 'left_shift' },
                  conditions: [{ type: 'variable_if', name: 'left_shift pressed', value: 1 }],
                  to: [{ set_variable: { name: 'right symbols layer', value: 1 } }],
                  to_after_key_up: [{ set_variable: { name: 'right symbols layer', value: 0 } }],
                },
                {
                  type: 'basic',
                  from: { key_code: 'left_shift' },
                  to: [{ set_variable: { name: 'left_shift pressed', value: 1 } }, { key_code: 'left_shift' }],
                  to_delayed_action: {
                    to_if_invoked: [{ set_variable: { name: 'left_shift pressed', value: 0 } }],
                    to_if_canceled: [{ set_variable: { name: 'left_shift pressed', value: 0 } }],
                  },
                },
                {
                  type: 'basic',
                  from: { key_code: 'right_shift' },
                  conditions: [{ type: 'variable_if', name: 'right_shift pressed', value: 1 }],
                  to: [{ set_variable: { name: 'left symbols layer', value: 1 } }],
                  to_after_key_up: [{ set_variable: { name: 'left symbols layer', value: 0 } }],
                },
                {
                  type: 'basic',
                  from: { key_code: 'right_shift' },
                  to: [{ set_variable: { name: 'right_shift pressed', value: 1 } }, { key_code: 'right_shift' }],
                  to_delayed_action: {
                    to_if_invoked: [{ set_variable: { name: 'right_shift pressed', value: 0 } }],
                    to_if_canceled: [{ set_variable: { name: 'right_shift pressed', value: 0 } }],
                  },
                },
                // {
                //   type: 'basic',
                //   // from: { key_code: 'spacebar', modifiers: { mandatory: ['left_control'] } },
                //   from: { key_code: 'spacebar' },
                //   conditions: [{ type: 'variable_if', name: 'caps_lock pressed', value: 1 }],
                //   to: [{ set_variable: { name: 'right symbols layer', value: 1 } }],
                //   to_after_key_up: [{ set_variable: { name: 'right symbols layer', value: 0 } }],
                // },
                // {
                //   type: 'basic',
                //   from: { key_code: 'spacebar' },
                //   conditions: [{ type: 'variable_if', name: 'enter pressed', value: 1 }],
                //   to: [{ set_variable: { name: 'left symbols layer', value: 1 } }],
                //   to_after_key_up: [{ set_variable: { name: 'left symbols layer', value: 0 } }],
                // },
                // {
                //   type: 'basic',
                //   from: { key_code: 'caps_lock' },
                //   to: [{ set_variable: { name: 'caps_lock pressed', value: 1 } }],
                //   to_if_alone: { key_code: 'caps_lock' },
                //   to_after_key_up: [{ set_variable: { name: 'caps_lock pressed', value: 0 } }],
                // },
                // {
                //   type: 'basic',
                //   from: { key_code: 'return_or_enter' },
                //   to: [{ set_variable: { name: 'enter pressed', value: 1 } }],
                //   to_if_alone: { key_code: 'return_or_enter' },
                //   to_after_key_up: [{ set_variable: { name: 'enter pressed', value: 0 } }],
                // },
              ]),
            },
            {
              description: 'Caps Lock to left control, ESC on double tap',
              manipulators: [
                // {
                //   type: 'basic',
                //   from: { key_code: 'spacebar', modifiers: { optional: ['any'] } },
                //   conditions: [{ type: 'variable_if', name: 'caps_lock pressed', value: 1 }],
                //   to: [{ key_code: 'escape' }, { key_code: 'spacebar' }],
                // },
                {
                  type: 'basic',
                  from: { key_code: 'caps_lock', modifiers: { optional: ['any'] } },
                  conditions: [{ type: 'variable_if', name: 'caps_lock pressed', value: 1 }],
                  to: [{ key_code: 'escape' }],
                },
                {
                  type: 'basic',
                  from: { key_code: 'caps_lock', modifiers: { optional: ['any'] } },
                  to: [{ set_variable: { name: 'caps_lock pressed', value: 1 } }, { key_code: 'left_control', lazy: true }],
                  // parameters: {
                  //   'basic.to_if_alone_timeout_milliseconds': 300,
                  //   'basic.basic.to_if_held_down_threshold_milliseconds': 200,
                  // },
                  to_if_alone: [{ key_code: 'escape' }],
                  // to_if_held_down: [{ key_code: 'left_control' }],
                  // to_after_key_up: [{ set_variable: { name: 'caps_lock pressed', value: 0 } }],
                  to_delayed_action: {
                    to_if_invoked: [{ set_variable: { name: 'caps_lock pressed', value: 0 } }],
                    to_if_canceled: [{ set_variable: { name: 'caps_lock pressed', value: 0 } }],
                  },
                },
                // {
                //   type: 'basic',
                //   from: { key_code: 'caps_lock', modifiers: { optional: ['any'] } },
                //   conditions: [{ type: 'variable_if', name: 'caps_lock pressed', value: 1 }],
                //   to: [{ key_code: 'escape' }],
                // },
                // {
                //   type: 'basic',
                //   from: { key_code: 'caps_lock', modifiers: { optional: ['any'] } },
                //   to: [{ key_code: 'left_control' }, { set_variable: { name: 'caps_lock pressed', value: 1 } }],
                //   to_delayed_action: {
                //     to_if_invoked: [{ set_variable: { name: 'caps_lock pressed', value: 0 } }],
                //     to_if_canceled: [{ set_variable: { name: 'caps_lock pressed', value: 0 } }],
                //   },
                // },
              ],
            },
            {
              description: 'Hold tab to Hyper',
              manipulators: [
                {
                  type: 'basic',
                  from: { key_code: 'tab' },
                  to: [{ key_code: 'left_shift', modifiers: ['left_control', 'left_alt', 'left_command'], lazy: true }],
                  to_if_alone: [{ key_code: 'tab' }],
                },
              ],
            },
            {
              description: 'Left Shift + Spacebar => Backspace',
              manipulators: [
                {
                  type: 'basic',
                  from: { key_code: 'spacebar', modifiers: { mandatory: ['left_shift'] } },
                  to: [{ key_code: 'delete_or_backspace', lazy: true, repeat: true }],
                },
              ],
            },
            {
              description: 'Right Shift + Spacebar => Delete Forward',
              manipulators: [
                {
                  type: 'basic',
                  from: { key_code: 'spacebar', modifiers: { mandatory: ['right_shift'] } },
                  to: [{ key_code: 'delete_forward', lazy: true, repeat: true }],
                },
              ],
            },
            {
              description: 'vi hjkl with option',
              manipulators: [
                {
                  type: 'basic',
                  from: { key_code: 'h', modifiers: { mandatory: ['left_option'] } },
                  to: [{ key_code: 'left_arrow' }],
                },
                {
                  type: 'basic',
                  from: { key_code: 'j', modifiers: { mandatory: ['left_option'] } },
                  to: [{ key_code: 'down_arrow' }],
                },
                {
                  type: 'basic',
                  from: { key_code: 'k', modifiers: { mandatory: ['left_option'] } },
                  to: [{ key_code: 'up_arrow' }],
                },
                {
                  type: 'basic',
                  from: { key_code: 'l', modifiers: { mandatory: ['left_option'] } },
                  to: [{ key_code: 'right_arrow' }],
                },
              ],
            },
            // {
            //   description: 'Double tap and hold left_shift to make it left_control + left_option (cyrillic)',
            //   manipulators: [
            //     {
            //       type: 'basic',
            //       conditions: [{ type: 'variable_if', name: 'left_shift pressed cyrillic', value: 1 }],
            //       from: { key_code: 'left_shift' },
            //       to: [{ key_code: 'left_alt', modifiers: ['left_control'] }],
            //     },
            //     {
            //       type: 'basic',
            //       conditions: [
            //         {
            //           input_sources: [{ language: 'ru' }],
            //           type: 'input_source_if'
            //         }
            //       ],
            //       from: { key_code: 'left_shift' },
            //       to: [
            //         { set_variable: { name: 'left_shift pressed cyrillic', value: 1 } },
            //         { key_code: 'left_shift' },
            //       ],
            //       to_delayed_action: {
            //         to_if_invoked: [{ set_variable: { name: 'left_shift pressed cyrillic', value: 0 } }],
            //         to_if_canceled: [{ set_variable: { name: 'left_shift pressed cyrillic', value: 0 } }],
            //       },
            //     },
            //   ],
            // },
            // {
            //   description: 'Double tap and hold right_shift to make it right_control + right_option (cyrillic)',
            //   manipulators: [
            //     {
            //       type: 'basic',
            //       conditions: [{ type: 'variable_if', name: 'right_shift pressed cyrillic', value: 1 }],
            //       from: { key_code: 'right_shift' },
            //       to: [{ key_code: 'right_alt', modifiers: ['right_control'] }],
            //     },
            //     {
            //       type: 'basic',
            //       conditions: [
            //         {
            //           input_sources: [{ language: 'ru' }],
            //           type: 'input_source_if'
            //         }
            //       ],
            //       from: { key_code: 'right_shift' },
            //       to: [
            //         { set_variable: { name: 'right_shift pressed cyrillic', value: 1 } },
            //         { key_code: 'right_shift' },
            //       ],
            //       to_delayed_action: {
            //         to_if_invoked: [{ set_variable: { name: 'right_shift pressed cyrillic', value: 0 } }],
            //         to_if_canceled: [{ set_variable: { name: 'right_shift pressed cyrillic', value: 0 } }],
            //       },
            //     },
            //   ],
            // },
            // },
            // {
            //   description: 'Caps Lock to ESC on tap/Left control on hold',
            //   manipulators: [
            //     {
            //       type: 'basic',
            //       from: { key_code: 'spacebar', modifiers: { mandatory: ['left_control'] } },
            //       conditions: [{ type: 'variable_if', name: 'caps_lock pressed', value: 1 }],
            //       to: [{ key_code: 'spacebar' }],
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'caps_lock', modifiers: { optional: ['any'] } },
            //       to: [{ key_code: 'left_control', lazy: true }, { set_variable: { name: 'caps_lock pressed', value: 1 } }],
            //       to_if_alone: [{ key_code: 'escape' }],
            //       to_after_key_up: [{ set_variable: { name: 'caps_lock pressed', value: 0 } }],
            //     },
            //   ],
            // },
            // {
            //   description: 'Caps Lock to ESC on tap/Left control on double tap hold',
            //   manipulators: [
            //     {
            //       type: 'basic',
            //       from: {
            //         key_code: 'caps_lock',
            //         modifiers: {
            //           optional: ['any'],
            //         },
            //       },
            //       to: [
            //         {
            //           key_code: 'left_control',
            //         },
            //       ],
            //       conditions: [
            //         {
            //           type: 'variable_if',
            //           name: 'caps_lock pressed',
            //           value: 1,
            //         },
            //       ],
            //     },
            //     {
            //       type: 'basic',
            //       from: {
            //         key_code: 'caps_lock',
            //         modifiers: {
            //           optional: ['any'],
            //         },
            //       },
            //       to: [
            //         {
            //           set_variable: {
            //             name: 'caps_lock pressed',
            //             value: 1,
            //           },
            //         },
            //         {
            //           key_code: 'escape',
            //         },
            //       ],
            //       to_delayed_action: {
            //         to_if_invoked: [
            //           {
            //             set_variable: {
            //               name: 'caps_lock pressed',
            //               value: 0,
            //             },
            //           },
            //         ],
            //         to_if_canceled: [
            //           {
            //             set_variable: {
            //               name: 'caps_lock pressed',
            //               value: 0,
            //             },
            //           },
            //         ],
            //       },
            //     },
            //   ],
            // },
            // {
            //   description: 'Caps lock shenanigans',
            //   manipulators: (function () {
            //     var aCharcode = 'a'.charCodeAt(0)
            //     var zCharcode = 'z'.charCodeAt(0)
            //     const arr = []
            //     for (var i = aCharcode; i <= zCharcode; i++) {
            //       var char = String.fromCharCode(i)
            //       arr.push({
            //         type: 'basic',
            //         from: { key_code: char, modifiers: { optional: ['any'] } },
            //         conditions: [{ type: 'variable_if', name: 'caps_lock pressed', value: 1 }],
            //         to: [{ key_code: char, modifiers: ['left_control'] }],
            //       })
            //     }
            //     return arr
            //   })().concat([
            //     {
            //       type: 'basic',
            //       from: { key_code: 'caps_lock', modifiers: { optional: ['any'] } },
            //       to: [{ set_variable: { name: 'caps_lock pressed', value: 1 } }, { key_code: 'escape' }],
            //       to_after_key_up: [{ set_variable: { name: 'caps_lock pressed', value: 0 } }],
            //     },
            //   ]),
            // },
            // {
            //   description: 'Quotes key to Enter',
            //   manipulators: [
            //     {
            //       type: 'basic',
            //       conditions: [
            //         {
            //           input_sources: [{ language: 'en' }],
            //           type: 'input_source_if'
            //         }
            //       ],
            //       from: { key_code: 'quote', modifiers: { optional: 'any' } },
            //       to: [{ key_code: 'return_or_enter' }],
            //     }
            //   ]
            // },
            // {
            //   description: 'Double tap and hold left command for fn',
            //   manipulators: [
            //     {
            //       type: 'basic',
            //       conditions: [{ type: 'variable_if', name: 'left_command pressed', value: 1 }],
            //       from: { key_code: 'left_command' },
            //       to: [
            //         { key_code: 'fn', lazy: true }
            //       ],
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'left_command' },
            //       to: [
            //         { set_variable: { name: 'left_command pressed', value: 1 } },
            //         { key_code: 'left_command' },
            //       ],
            //       to_delayed_action: {
            //         to_if_invoked: [{ set_variable: { name: 'left_command pressed', value: 0 } }],
            //         to_if_canceled: [{ set_variable: { name: 'left_command pressed', value: 0 } }],
            //       },
            //     },
            //   ],
            // },
            // {
            //   description: 'Double tap and hold right command for fn',
            //   manipulators: [
            //     {
            //       type: 'basic',
            //       conditions: [{ type: 'variable_if', name: 'right_command pressed', value: 1 }],
            //       from: { key_code: 'right_command' },
            //       to: [
            //         { key_code: 'fn', lazy: true }
            //       ],
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'right_command' },
            //       to: [
            //         { set_variable: { name: 'right_command pressed', value: 1 } },
            //         { key_code: 'right_command' },
            //       ],
            //       to_delayed_action: {
            //         to_if_invoked: [{ set_variable: { name: 'right_command pressed', value: 0 } }],
            //         to_if_canceled: [{ set_variable: { name: 'right_command pressed', value: 0 } }],
            //       },
            //     },
            //   ],
            // },
            // {
            //   description: 'vi mode w/ fn',
            //   manipulators: [
            //     {
            //       type: 'basic',
            //       from: { key_code: 'e', modifiers: { mandatory: ['fn'] } },
            //       to: { key_code: 'right_arrow', modifiers: ['left_alt'] },
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'r', modifiers: { mandatory: ['fn', 'left_control'] } },
            //       to: { key_code: 'z', modifiers: ['left_shift', 'left_command'] },
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'r', modifiers: { mandatory: ['fn', 'left_alt'] } },
            //       to: { key_code: 'right_arrow', modifiers: ['left_command'] },
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'y', modifiers: { mandatory: ['fn'] } },
            //       to: { key_code: 'c', modifiers: ['left_command'] },
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'u', modifiers: { mandatory: ['fn'] } },
            //       to: { key_code: 'z', modifiers: ['left_command'] },
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'p', modifiers: { mandatory: ['fn'] } },
            //       to: { key_code: 'v', modifiers: ['left_command'] },
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'd', modifiers: { mandatory: ['fn'] } },
            //       to: { key_code: 'x', modifiers: ['left_command'] },
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'h', modifiers: { mandatory: ['fn'] } },
            //       to: { key_code: 'left_arrow' },
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'j', modifiers: { mandatory: ['fn'] } },
            //       to: { key_code: 'down_arrow' },
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'k', modifiers: { mandatory: ['fn'] } },
            //       to: { key_code: 'up_arrow' },
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'l', modifiers: { mandatory: ['fn'] } },
            //       to: { key_code: 'right_arrow' },
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'b', modifiers: { mandatory: ['fn'] } },
            //       to: { key_code: 'left_arrow', modifiers: ['left_alt'] },
            //     },
            //     {
            //       type: 'basic',
            //       from: { key_code: 'slash', modifiers: { mandatory: ['fn'] } },
            //       to: { key_code: 'f', modifiers: ['left_command'] },
            //     },
            //   ]
            // },
          ])
          .filter(Boolean),
      },
      null,
      '  '
    )
  )
}

main()
